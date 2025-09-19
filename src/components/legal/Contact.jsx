import React from "react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Contact Vidhi Ventures</h1>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you. Reach out to us through the details below.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>📍 Address:</strong> Vidhi Ventures, 123 Business Park, Your City, India
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>✉️ Email:</strong>{" "}
            <a href="mailto:support@vidhiventures.in" className="text-blue-600 hover:underline">
              support@vidhiventures.in
            </a>
          </p>
          <p>
            <strong>🌐 Website:</strong>{" "}
            <a href="https://vidhiventures.in" className="text-blue-600 hover:underline">
              www.vidhiventures.in
            </a>
          </p>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-gray-600">
          <p>
            Our support team is available <strong>Mon–Fri, 9:00 AM – 6:00 PM</strong>. We aim to
            respond to all queries within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
