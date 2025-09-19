import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Privacy Policy — Vidhi Ventures</h1>

        <p className="text-gray-700">
          Effective date: <strong>{new Date().toLocaleDateString()}</strong>
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="font-semibold">1. Introduction</h2>
            <p>
              Vidhi Ventures ("we", "us", "our") values your privacy. This policy explains how we
              collect, use, and protect personal information when you use our website or services.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">2. Information We Collect</h2>
            <ul className="list-disc ml-6">
              <li>Contact information you provide (name, email, phone) when you contact us.</li>
              <li>Order and transaction information necessary to process purchases and affiliate referrals.</li>
              <li>Automatically collected data such as IP address, device type, and usage statistics via standard web logs.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">3. How We Use Your Information</h2>
            <p>
              We use information to process orders, respond to inquiries, provide support, and
              improve our services. We may also use non-identifying analytics data to optimize the
              shopping experience.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">4. Affiliate Links</h2>
            <p>
              Vidhi Ventures may use affiliate links to third-party merchants. Clicking an affiliate
              link may pass certain information (such as referral ID) to the merchant. We do not
              share personal data with affiliate partners unless necessary to complete a transaction.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">5. Data Storage & Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data.
              However, no method of transmission or storage is completely secure. If you have concerns,
              contact us at <a className="text-blue-600" href="mailto:privacy@vidhiventures.in">privacy@vidhiventures.in</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">6. Sharing & Third Parties</h2>
            <p>
              We do not sell or rent personal information. We may share data with service providers
              who help operate the website (payment processors, hosting providers) under strict
              confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">7. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to remember preferences and analyze traffic.
              You can control cookie settings in your browser.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">8. Children</h2>
            <p>
              Our website is not directed to children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">9. Changes to This Policy</h2>
            <p>
              We may update the privacy policy periodically. We will post the revised policy here
              with the effective date.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">10. Contact</h2>
            <p>
              For questions about this policy, email <a className="text-blue-600" href="mailto:privacy@vidhiventures.in">privacy@vidhiventures.in</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
