import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts";
import { Head as DefaultHead } from "../layouts/head";

export function Head() {
  return DefaultHead({
    title: "SMS Terms and Conditions | Barnes Software",
    description:
      "SMS Terms and Conditions for Barnes Software customer-service SMS messages sent on behalf of participating restaurants.",
  });
}

export default function SmsTermsPage() {
  return (
    <Layout>
      <section className="section section--legal">
        <div className="container">
          <div className="section__content section__content--standard">
            <article className="legal-copy">
              <p className="legal-copy__updated">Last updated: June 1, 2026</p>
              <h1 className="section__title">SMS Terms and Conditions</h1>

              <p>
                By verbally agreeing to receive a text message during a call,
                you consent to receive customer-service SMS messages from Barnes
                Software.
              </p>

              <p>
                Barnes Software sends these customer-requested messages on
                behalf of participating restaurants in response to customer
                requests. Message types may include online ordering links,
                reservation follow-up, catering inquiry follow-up, manager
                callback information, and related service messages.
              </p>

              <p>Message frequency varies.</p>

              <p>Message and data rates may apply.</p>

              <p>Reply STOP to opt out. Reply HELP for help.</p>

              <p>Consent is not a condition of purchase.</p>

              <h2>Contact</h2>
              <p>
                For help with these SMS terms, contact Barnes Software at{" "}
                <a href="mailto:paul.barnes.psnl@gmail.com">
                  paul.barnes.psnl@gmail.com
                </a>
                .
              </p>

              <p>
                See the <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
