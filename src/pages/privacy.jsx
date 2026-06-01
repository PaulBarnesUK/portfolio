import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts";
import { Head as DefaultHead } from "../layouts/head";

export function Head() {
  return DefaultHead({
    title: "Privacy Policy | Barnes Software",
    description:
      "Privacy Policy for Barnes Software customer-service SMS messages sent on behalf of participating restaurants.",
  });
}

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="section section--legal">
        <div className="container">
          <div className="section__content section__content--standard">
            <article className="legal-copy">
              <p className="legal-copy__updated">Last updated: June 1, 2026</p>
              <h1 className="section__title">Privacy Policy</h1>

              <p>
                Barnes Software provides phone assistant software for
                participating restaurants. This Privacy Policy explains how
                Barnes Software handles information related to
                customer-requested messages and related restaurant service
                follow-up.
              </p>

              <h2>Information We Collect</h2>
              <p>
                Barnes Software collects customer phone numbers only when
                customers provide or confirm them for SMS follow-up. Collected
                information may include phone number, call or request details,
                reservation details, catering inquiry details, callback details,
                and message history.
              </p>

              <h2>How We Use Information</h2>
              <p>
                SMS messages are customer-service related and sent only after a
                customer request or consent. Messages may include online
                ordering links, reservation follow-up, catering inquiry
                follow-up, manager callback information, or related customer
                service follow-up.
              </p>

              <p>
                Barnes Software may process customer information on behalf of
                participating restaurants to provide these services and respond
                to customer requests.
              </p>

              <h2>Sharing and Service Providers</h2>
              <p>
                Mobile opt-in data and consent will not be shared with third
                parties for promotional or marketing purposes.
              </p>

              <p>
                Barnes Software may use service providers to deliver SMS
                messages, operate the website, provide hosting, maintain logs,
                prevent abuse, or provide customer support, but only as needed
                to provide the service.
              </p>

              <h2>SMS Choices</h2>
              <p>
                Customers can reply STOP to opt out of customer-service SMS
                messages. Customers can reply HELP for help.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy questions, contact Barnes Software at{" "}
                <a href="mailto:paul.barnes.psnl@gmail.com">
                  paul.barnes.psnl@gmail.com
                </a>
                .
              </p>

              <p>
                See also the <Link to="/sms-terms">SMS Terms and Conditions</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
