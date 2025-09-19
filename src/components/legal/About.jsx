import React from "react";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Vidhi Ventures</h1>
        <p className="text-gray-700 mb-4">
          Vidhi Ventures is a modern e-commerce platform dedicated to bringing curated,
          high-quality products to customers across India. We combine a clean shopping
          experience with robust affiliate partnerships to offer a wide catalog of products
          while helping partners reach more customers.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To simplify online shopping by showcasing verified products with clear
              information, multiple images, honest ratings, and direct affiliate links that
              make purchases trustworthy and convenient.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Offer</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Product pages with multi-image sliders and detailed descriptions</li>
              <li>Star-based ratings and price information for quick comparisons</li>
              <li>Seamless affiliate integrations for trusted checkout flows</li>
              <li>Mobile-first responsive design for an excellent shopping experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h2>
          <p className="text-gray-700">
            Customer trust, transparency, and a simple buying experience are at the heart of
            Vidhi Ventures. We display clear product details, multiple images, and affiliate
            links so customers can make informed choices.
          </p>
        </div>
      </div>
    </section>
  );
}
