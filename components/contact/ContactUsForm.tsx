"use client";

import { FormEvent, useState } from "react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import {
  contactDeviceOptions,
  contactSubjectOptions,
} from "@/lib/contact-data";
import { supportConfig } from "@/lib/site";

export function ContactUsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const orderNumber = String(data.get("orderNumber") ?? "");
    const device = String(data.get("device") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      orderNumber ? `Order Number: ${orderNumber}` : null,
      `Device: ${device}`,
      `Subject: ${subject}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${supportConfig.email}?subject=${encodeURIComponent(
      `TiviMate IPTV Support — ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="telvis-section telvis-contact-form-section"
      aria-labelledby="contact-form-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-contact-form-panel">
          <CardRevealPart>
            <SectionHeader
              id="contact-form-heading"
              eyebrow="Send a message"
              title={
                <>
                  Contact <TitleAccent>Form</TitleAccent>
                </>
              }
              lead="Provide as much relevant information as possible so our team can understand the issue."
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <form className="telvis-contact-form" onSubmit={handleSubmit}>
              <div className="telvis-form-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>

              <div className="telvis-form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="telvis-form-field">
                <label htmlFor="contact-order">Order Number — Optional</label>
                <input
                  id="contact-order"
                  name="orderNumber"
                  type="text"
                  placeholder="Order number"
                />
              </div>

              <div className="telvis-form-field">
                <label htmlFor="contact-device">Device</label>
                <select id="contact-device" name="device" required defaultValue="">
                  <option value="" disabled>
                    Select your device
                  </option>
                  {contactDeviceOptions.map((device) => (
                    <option key={device} value={device}>
                      {device}
                    </option>
                  ))}
                </select>
              </div>

              <div className="telvis-form-field">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {contactSubjectOptions.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="telvis-form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Describe your question or issue in detail."
                />
              </div>

              <button
                type="submit"
                className="telvis-cta-primary telvis-contact-form-submit"
              >
                Submit Request
              </button>

              {submitted ? (
                <p className="telvis-form-success" role="status">
                  Your email app should open with the support request ready to send.
                </p>
              ) : null}
            </form>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}
