---
title: "Taking the Phones: The Unglamorous Reality of Deploying AI for Small Businesses"
date: "2026-06-14"
slug: "taking-the-phones-the-unglamorous-reality-of-deploying-ai-for-small-businesses"
excerpt: "What I learned by taking calls inside a busy restaurant before deploying an AI voice agent into a real small-business workflow."
tags:
  [
    "AI Agents",
    "Voice AI",
    "Product Engineering",
    "Small Business",
    "Field Notes",
  ]
image: /images/blog/paul-behind-hikari-counter-taking-phone-call.webp
alt: "A busy restaurant counter during a Friday night rush with a phone ringing"
---

It's 7:15PM on a Friday night at Hikari Sushi and Ramen in Wichita, and I am wildly out of my depth.

The air is thick with the savoury, steamy aroma of boiling tonkotsu broth and the sharp tang of seasoned rice vinegar. Around me, servers are weaving through the narrow passes with steaming bowls of ramen, busboys are clearing tables at breakneck speed, and the kitchen ticket printer is buzzing like an angry hornet.

I don't belong here. At least, not according to my resume. I'm a software developer. But tonight, I’m crammed behind the front counter, gripping a greasy cordless phone to my ear, trying to decipher a takeout order over the deafening din of a peak weekend rush.

I didn't volunteer for this shift for the culinary experience. I did it to get as close as possible to the exact problem I was hired to solve. The owner had already told me the high-level issue: they were losing revenue because the staff could barely keep up with dine-in customers, let alone the ringing phone. But to build the AI voice agent that would fix this, a discovery meeting wasn't enough. As an engineer, you can't architect a solution for an environment you don't understand. I needed the reality.

So, I became the buffer. By taking the calls that would have otherwise been missed, I got a front-row seat to the types of callers, their questions, and the chaos of the kitchen. To build the perfect system, I first had to step away from my IDE and step into the fire.

### The Clues in the Chaos

As I huddled behind the counter, two realisations hit me that I never would have uncovered by asking a chatbot how to build a restaurant agent.

**First: hungry people are impatient.**

I had only learned the restaurant’s outdated POS system a couple of hours earlier, so I was slow. I spent agonising seconds scanning the screen for menu items I had never heard of, while the caller waited in silence. I could practically feel their blood pressure rising through the receiver.

A human gets a little grace. An AI agent does not. If the bot made them wait that long, they would hang up.

That became one of the core constraints for the system: the voice agent could not merely be correct. It had to be fast. No long preambles. No meandering clarifying questions. No dead air while a model thought about what to do next.

Every millisecond of response latency would matter - a reality that later forced me to aggressively optimise the entire stack to hit a p90 response time well below industry standards (more on that engineering breakdown in a future post).

**Second: the calls were less predictable than the menu suggested.**

In between normal sushi orders, I handled a blatant spam call. Later, someone asked who was playing live music at the restaurant that night.

_Live music?_

That had not come up in the discovery meeting. It was not in my imagined “restaurant phone agent” script. But it was exactly the kind of real-world question a caller might ask.

So the system could not rely on a rigid decision tree. It needed to handle the ordinary cases well, but it also needed safe behaviour for everything outside the happy path: unknown questions, spam calls, vague requests, missing information, and callers who expected the restaurant to know things the agent did not.

Those moments became design constraints. Latency had to be treated as a product feature. Unknowns had to be handled without hallucination. And every weird call was a candidate for an eval.

### The MVP Was Deliberately Boring

After that shift, the shape of the MVP became much clearer.

The tempting version of the product was a fully autonomous phone ordering agent: take the customer’s order, modify items, calculate totals, send it to the kitchen, and maybe even handle payment.

That would have made for a better demo. It also would have been the wrong first deployment.

The restaurant already had an online ordering system. The staff already had a workflow. The kitchen already had printers, POS terminals, third-party delivery tablets, and enough chaos during peak hours. Dropping a fully autonomous ordering agent into that environment would not have simplified the business. It would have added another failure surface.

So the first version was intentionally narrow.

If the staff could not answer the phone, the agent would pick up. If the caller wanted to order, it would text them the online ordering link. If they had a reservation, catering, or complaint request, it would collect the details and pass them to the owner. If they asked a question the system did not have data for, it would say so instead of making something up.

That sounds less exciting than “an AI agent that can do everything.” But in production, restraint is a feature.

### The Agent Was Only One Piece of the System

Once the MVP was scoped, the next lesson was that the “AI agent” was only a small part of what actually needed to work.

The restaurant did not have a clean, greenfield system waiting for automation. It had a Cox Business phone line, call forwarding rules, an online ordering platform, multiple POS systems, kitchen printers, third-party delivery apps, and staff who already had their own way of surviving the dinner rush.

The agent had to fit into that environment without asking the restaurant to reorganise itself around my software.

That meant the first production deployment was less glamorous than the demo. A lot of the work was telephony configuration, SIP routing, SMS delivery, prompt constraints, fallback behaviour, and making sure the agent did not promise anything the rest of the business could not support.

This is the part of AI deployment that rarely shows up in demo videos. The model is important, but the product is the system around it. If the phone forwarding fails, the agent never answers. If the SMS link does not send, the order flow breaks. If the agent offers a transfer that does not exist, the customer loses trust. If the call drags on after the customer is done, the system feels broken even if the model sounded polite.

In production, the impressive part is not that an AI can talk. It is that the whole chain behaves correctly when a real customer calls.

### The Kid Who Found My First Production Bug

When the agent finally started taking real calls, the first issues were not exotic AI failures. They were boring software problems.

One caller wanted to place an order. The agent handled the flow correctly: explained staff were busy, offered to text the online ordering link, confirmed the number, sent the link, and wrapped up politely.

The task was complete.

But the call did not end.

The caller said goodbye. The agent said goodbye. The caller said goodbye again. The agent said goodbye again. Then a **kid in the background** appeared to clock what was happening: the AI would keep responding as long as someone kept talking to it. So they started playing with it:

<img src="/images/blog/goodbye-loop.webp" alt="Transcript of a user repeateadly saying goodbye to an AI assistant, and the AI assistant doing the same back." style="width: 400px; max-width: 100%;">

This wasn't a model intelligence problem. The agent simply had no way to end the call, and therefore had to endure becoming the child's plaything. The next day, I added an explicit `endCall` tool and wrote evals for the scenario using the transcript.

The second issue exposed a gap I thought I had already closed.

I had instructed the agent not to hallucinate answers or pretend to know things it did not know. But when it was asked a question it could not answer from its FAQ data, it improvised a different escape hatch: it offered to transfer the caller to staff.

That was impossible. The system had no way to perform that transfer. So the agent had invented a capability.

The lesson was that adding guardrails around hallucinated knowledge was not enough. The agent also needed to avoid offering unavailable actions.

So I hardened the system prompt, then turned the failed conversation into an eval.

Production revealed the real work quickly: not making the agent sound smarter, but making its boundaries clearer.

### The Feedback Loop Is the Product

One week into the pilot, the most useful part of the system is not just that the agent can answer calls. It is that every call creates evidence.

At the end of each session, I log the transcript, tool calls, latency stats, and enough detail to reconstruct what happened. Right now, the call volume is low enough that I can inspect every conversation manually. But I have also added an automated review step: classify the call type, identify whether the caller’s request was resolved, record important business events like an ordering link being sent, and flag whether the agent followed its instructions.

That turns production from a black box into a feedback loop.

The goodbye-loop call became an eval for call termination. The unsupported FAQ answer became an eval for unknown questions and unavailable actions. If I change the prompt or tools later, those cases run again. The point is not to prove the agent will never fail. It is to make sure the failures I have already seen do not quietly come back.

That is the difference between a demo and an active deployment. A demo shows the system working once. A deployment needs a mechanism for improving when reality disagrees with your assumptions.

### The Unglamorous Part Is the Job

The pilot is still early. I am not claiming victory one week in.

There are still open questions: how much call volume the restaurant will actually send to the agent, how much value it creates during peak periods, which call types matter most, and what breaks next once more real customers interact with it.

But taking the phones before deploying the agent changed the product I built.

It showed me that latency is not just a technical optimisation; it is the difference between a caller staying on the line or giving up. It showed me that unknown questions are not edge cases; they are normal customer behaviour. It showed me that the first version should not be the most ambitious thing I could imagine, but the safest useful thing I could put in front of real callers.

Most of the work is not glamorous. It is call forwarding, SIP configuration, SMS delivery, prompt boundaries, evals, logs, fallbacks, and learning how the restaurant actually operates before trying to automate any part of it.

But that is the work.

Deploying AI into small businesses is not about dropping a model into a workflow and calling it done. It is about getting close enough to the business to understand where the system can help, where it can break, and where it has no business pretending to be capable.

The model matters. But the model is not the product.

The product is the whole chain: the phone rings, the right system answers, the caller gets helped, the business does not get burdened with new mess, and every failure teaches me how to make the next call better.

The pilot is ongoing. The agent will change, and I expect more things to break. That is partly the point.

---

_Author’s note: This post was written with AI assistance. I used AI to help draft and refine sections, but the experiences, technical details, edits, and final judgement are my own._
