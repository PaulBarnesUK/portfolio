---
title: "Predicting Video Difficulty for Language Learners"
date: "2026-05-07"
slug: "predicting-language-learning-video-difficulty"
excerpt: "How I used pairwise comparisons, TrueSkill, transcript features, and a stacking regressor to predict the difficulty of Spanish videos for language learners."
tags:
  [
    "Machine Learning",
    "Language Learning",
    "Human Feedback",
    "Product Engineering",
  ]
image: /images/blog/predicting-video-difficulty.webp
alt: "Difficulty ladder showing Spanish videos ranked from easiest to hardest"
---

## Intro

YouTube has millions of Spanish videos.

For language learners, that sounds useful. In practice, it creates a different problem: the hard part is not finding Spanish content. The hard part is knowing which videos you can actually understand.

One video might be so easy that it barely helps. The next might be so difficult that you get lost after thirty seconds. For people learning through comprehensible input, the useful content sits somewhere in the middle: challenging enough to stretch you, but understandable enough that you can still follow what is happening.

That was the problem I wanted to solve with Comprensi.

I wanted to build a system that could look at a Spanish video and estimate how difficult it would feel for a learner before they watched it.

This post explains how I approached that problem using a simple human-feedback loop and classical machine learning. The core idea was not to make a model magically “understand” Spanish. It was to collect useful judgments from learners, turn those judgments into a difficulty scale, and then train a model to predict where new videos belong on that scale.

## Creating the difficulty signal

Before I could train a model, I needed labels.

YouTube gives you plenty of metadata: views, likes, duration, publish date, channel, title, thumbnail, and so on. But none of those answer the question a language learner actually cares about:

> “Will I understand this?”

So the first step was to create a difficulty signal from user feedback.

Rather than asking learners to score videos directly from 1–10, I used **pairwise comparisons**:

> “Which of these two videos was easier to understand?”

This is a much lower-friction judgment. Users may not know whether a video is a 4 or a 6, but they can usually tell which of two videos felt easier.

Each comparison gives a relative difficulty signal:

- If Video A is easier than Video B,
- then Video B should be considered harder than Video A.

To turn those comparisons into ratings, I used **TrueSkill**.

TrueSkill is a Bayesian rating system originally designed for ranking players in multiplayer games. In this case, the “players” are videos, and each comparison is treated as a match where the harder video “wins”.

So a simplified comparison looks like this:

| Video   | Result | Rating update        |
| ------- | ------ | -------------------- |
| Video A | Easier | Difficulty decreases |
| Video B | Harder | Difficulty increases |

Over many comparisons, TrueSkill estimates a difficulty distribution for each video. Videos consistently judged easier move down the scale; videos consistently judged harder move up.

The output is a ranked difficulty ladder derived from learner perception rather than manual tagging or platform engagement metrics.

That gave me the first useful dataset:

> videos with human-derived difficulty ratings.

Those ratings then became the labels for the supervised learning step.

## Extracting features from videos

Once I had human-derived difficulty ratings, the next step was feature extraction.

The TrueSkill rating gave me the label: the difficulty value I wanted the model to predict.

The features were measurable properties of each video that might explain why learners perceived it as easy or hard.

My initial dataset included a fairly broad set of features, including some that required processing the audio file directly. That added complexity. Over time, the most useful features ended up being simpler ones that could be computed from the transcript, plus basic video metadata like duration.

The four highest-value features were:

| Feature                         | What it measured                                                   | Why it mattered                                                                          |
| ------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **MATTR**                       | Lexical diversity                                                  | More varied vocabulary usually means higher difficulty.                                  |
| **Vocabulary difficulty index** | How uncommon the known words were                                  | Less frequent words are generally harder for learners.                                   |
| **Unknown ratio**               | Percentage of words not found in the frequency lists               | Missing words often represented names, slang, transcription errors, or rarer vocabulary. |
| **Words per minute**            | Speech speed, calculated from transcript length and video duration | Faster speech is usually harder to follow.                                               |

The vocabulary difficulty index was based on frequency lists. Common words were treated as easier; less common words were treated as more difficult. I then converted that into a normalised value between 0 and 1, where higher values represented more difficult vocabulary.

The unknown ratio captured the percentage of vocabulary that was not found in any of the frequency lists. This was useful because the “unknown” bucket often contained genuinely difficult words, slang, proper nouns, domain-specific terms, or transcript noise.

MATTR, or Moving-Average Type-Token Ratio, measured lexical diversity. A video that repeatedly uses the same basic vocabulary is usually easier than one that introduces a wider range of unique words.

Words per minute gave the model a simple speech-speed signal without requiring direct audio processing. Instead of analysing the audio file, I could estimate speed from the transcript word count and the video duration.

The useful lesson here was that the best features were not necessarily the most complex ones. The features that survived were the ones that were predictive, cheap to compute, and available for most videos.

That made the system much easier to scale.

At that point, the training setup looked like this:

| Input features                                         | Label                               |
| ------------------------------------------------------ | ----------------------------------- |
| MATTR, vocabulary difficulty index, unknown ratio, WPM | TrueSkill-derived difficulty rating |

The learner comparisons created the target. The transcript-derived features created the input. The model’s job was to learn the relationship between the two.

## Training the model

At this point, the problem became a supervised regression task.

For each video, I had:

- transcript-derived features: **MATTR**, **vocabulary difficulty index**, **unknown ratio**, and **words per minute**
- a human-derived difficulty label from TrueSkill

The label I used was the video’s TrueSkill `mu` value. In this setup, `mu` represented the estimated difficulty of the video on a continuous scale from **0 to 50**.

So rather than training the model to classify videos as “beginner”, “intermediate”, or “advanced”, I trained it to predict the underlying difficulty score directly.

The level labels were derived afterwards from the predicted `mu` value. For example, a video with `mu` between 0 and 10 might be shown as “Total Beginner”, while higher ranges mapped to harder levels.

This kept the model focused on one continuous difficulty scale, while leaving the product free to define the user-facing bands.

The final model was a **stacking regressor**.

It combined two relatively simple models:

- a **linear regression model**
- a **random forest regressor**

The reason for using a stacking ensemble was that the two models capture different kinds of relationships.

The linear model is useful when the relationship between a feature and difficulty is fairly direct. For example, as words per minute increases, difficulty may generally increase.

The random forest can capture more non-linear interactions. For example, high speech speed might not matter as much if the vocabulary is very simple, but it may matter much more when combined with high lexical diversity or lots of uncommon words.

A stacking regressor lets the system combine those different perspectives into a single prediction.

Earlier versions of the model used more components, including XGBoost and boosted-tree variants. Those worked, but they also increased deployment complexity. For Comprensi 2.0, I simplified the model down to the linear regression + random forest stack.

That turned out to be the right trade-off. It reduced dependencies, made the model easier to deploy, and actually improved the evaluation metrics.

The final model produced:

| Metric | Value |
| ------ | ----- |
| MSE    | 36.19 |
| RMSE   | 5.99  |
| R²     | 0.837 |

Since the target scale was 0–50, an RMSE of around **6 points** meant the model was not perfectly predicting the exact TrueSkill value, but it was close enough to be useful for ranking and difficulty banding. Additional pairwise comparisons once a video is live then refine the difficulty score toward a more accurate consensus estimate.

The **R² score of 0.837** was the more important signal: the model explained a large amount of the variance in the human-derived difficulty ratings using only a small set of transcript-level features.

The lesson here was that more model complexity did not automatically make the system better.

The best version was not the most sophisticated one. It was the version that was accurate enough, cheap to run, easy to deploy, and simple enough to maintain.

## From model to product

The model on its own is only part of the value, though. The real leverage comes from integrating it into a product.

In Comprensi, the difficulty model became useful because it sat inside a larger content-discovery system. New videos are fetched, transcripts processed, features computed, difficulty predicted, and the result shown to learners as part of their browsing and recommendation experience.

That means a learner does not have to waste as much time opening random videos, watching thirty seconds, realising the video was too easy or too hard, and then going back to search again.

The product can do that filtering upfront.

That is where the system becomes powerful: not as a standalone model, but as infrastructure for helping learners find the right content faster.

## Conclusion

This approach worked because it started with the learner’s problem rather than the model.

The goal was not to build the most sophisticated machine learning system possible. The goal was to help learners find Spanish content they could actually understand.

Pairwise comparisons created the difficulty signal. TrueSkill turned that signal into a continuous scale. Transcript-derived features made the videos learnable by a model. The model made it possible to predict difficulty for videos that had not yet been rated.

That system became the foundation of Comprensi’s content discovery experience, and it has helped learners spend thousands of hours learning through Spanish content that is at their level.

The same pattern could be reused elsewhere. Whether for another language or even for other formats such as podcasts, books, etc.

The features would need to change for other languages and formats, but the core loop is portable:

> collect human difficulty judgments → convert them into a scale → train a model to predict that scale → integrate the prediction into a useful product experience.

That is the part I hope other people can take inspiration from to help more learners.

If you're interested in knowing more, feel free to reach out to me at paul.barnes.psnl@gmail.com
