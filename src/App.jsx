import React from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const products = [
    {
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with 40hr battery life.",
      price: 2999,
      rating: 4,
      affiliateLink: "https://affiliate.example.com/product/123",
      images: [
        "https://via.placeholder.com/400x300?text=Headphones+1",
        "https://via.placeholder.com/400x300?text=Headphones+2",
        "https://via.placeholder.com/400x300?text=Headphones+3",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
    {
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 4999,
      rating: 5,
      affiliateLink: "https://affiliate.example.com/product/456",
      images: [
        "https://via.placeholder.com/400x300?text=Smartwatch+1",
        "https://via.placeholder.com/400x300?text=Smartwatch+2",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
