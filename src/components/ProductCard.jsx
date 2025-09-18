import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import ImageSlider from "./ImageSlider";

const ProductCard = ({ product }) => {
  return (
    <div className="w-94 h-full  rounded-2xl shadow-lg bg-white overflow-hidden border">
      {/* Image Slider */}
      <ImageSlider images={product.images} alt={product.name} />

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < product.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-green-600 mb-4">₹{product.price}</p>

        {/* Affiliate Button */}
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          <ShoppingCart size={18} />
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
