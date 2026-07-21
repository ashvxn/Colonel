"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { IndiaFlag } from "./IndiaFlag";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    // No backend wired up yet — this just confirms receipt client-side.
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section className="mst-section" id="contact">
      <div className="mst-wrap">
        <div className="mst-section-head">
          <div>
            <p className="mst-eyebrow">Get In Touch</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 12 }}>
              <IndiaFlag width={34} wave />
              <h2 className="mst-h2">Contact &amp; support the trust</h2>
            </div>
          </div>
        </div>

        <div className="mst-contact-grid">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mst-row2">
              <div className="mst-field">
                <label htmlFor="mst-name">Full Name</label>
                <input id="mst-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="mst-field">
                <label htmlFor="mst-email">Email</label>
                <input id="mst-email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="mst-row2">
              <div className="mst-field">
                <label htmlFor="mst-phone">Phone</label>
                <input id="mst-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="mst-field">
                <label htmlFor="mst-subject">Subject</label>
                <input id="mst-subject" name="subject" type="text" required />
              </div>
            </div>
            <div className="mst-field">
              <label htmlFor="mst-message">Message</label>
              <textarea id="mst-message" name="message" rows={5} required />
            </div>
            <button type="submit" className="mst-btn mst-btn-solid">
              Send Message <Icon name="arrow" style={{ stroke: "#1a0f00" }} />
            </button>
            <p className={`mst-formmsg ${submitted ? "show" : ""}`}>
              <Icon name="check" style={{ width: 12, height: 12, color: "var(--c-olive)", verticalAlign: -1 }} />{" "}
              Message received. The Trust office will respond within 2–3 working days.
            </p>
          </form>

          <div>
            <div className="mst-card">
              <span className="cnr tl" />
              <span className="cnr br" />
              <p className="mst-mono-tag" style={{ marginBottom: 6 }}>Foundation Office</p>
              <div className="mst-infoblock">
                <Icon name="pin" />
                <div>
                  <h4>Registered Address</h4>
                  <p>Major Sandeep Unnikrishnan Ashok Chakra Memorial Foundation, Indiranagar, Bengaluru, Karnataka 560038, India</p>
                </div>
              </div>
              <div className="mst-infoblock">
                <Icon name="phone" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 80 XXXX XXXX (placeholder)</p>
                </div>
              </div>
              <div className="mst-infoblock">
                <Icon name="mail" />
                <div>
                  <h4>Official Email</h4>
                  <p>office@sandeepunnikrishnanfoundation.org (placeholder)</p>
                </div>
              </div>
            </div>

            {/* DEV NOTE: figures/IDs below are placeholders pending official 80G / FCRA
                certificates and bank/UPI details from the Trust's legal counsel. */}
            <div className="mst-transparency">
              <p className="mst-mono-tag" style={{ color: "var(--c-saffron-ink)" }}>
                <Icon name="scale" style={{ width: 12, height: 12, verticalAlign: -1 }} /> Donation
                Transparency — Pending Certification
              </p>
              <ul>
                <li><b>80G Tax Exemption:</b> Certificate number to be published upon receipt from Income Tax Dept.</li>
                <li><b>FCRA Registration:</b> Application in process; registration number to follow.</li>
                <li><b>Bank Transfer:</b> A/C name, IFSC &amp; account number will appear here once verified.</li>
                <li><b>UPI:</b> Official QR code and UPI ID to be issued by the Treasurer&apos;s office.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
