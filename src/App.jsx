import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const products = [
    
{
      id: 5,
      name: "Redmi Pad Pro| Snapdragon 7s Gen 2| 30.7cm(12.1) Tablet ",
      description:
        "Redmi Pad Pro| Snapdragon 7s Gen 2| 30.7cm(12.1) Tablet| 33+ Days Standby|10000mAh| HyperOS| 120Hz|6GB, 128GB| Quad Speakers|Wi-Fi 6| Mist Blue",
      affiliateLink: "https://amzn.to/4gupLV9",
      price: "19,999",
      rating: 4.3,
      images: ["https://m.media-amazon.com/images/I/81b8NvM4lYL._SX466_.jpg",'https://m.media-amazon.com/images/I/A1tvh7H-H-L.SX522_.png','https://m.media-amazon.com/images/I/716-Pd83heL._SX466_.jpg','https://m.media-amazon.com/images/I/71T784tsDHL._SX466_.jpg','https://m.media-amazon.com/images/I/71ego+19X8L._SX466_.jpg','https://m.media-amazon.com/images/I/61j45IEPw-L._SX466_.jpg'],
    },
    {
      id: 4,
      name: "Happilo 100% Natural Premium California Almonds ",
      description:
        "Happilo 100% Natural Premium California Almonds 1kg Value Pack Pouch & MYFITNESS Chocolate Peanut Butter Smooth 1250g | 22g Protein",
      affiliateLink: "https://amzn.to/4n7rPoi",
      price: "1,459",
      rating: 4.1,
      images: ["https://m.media-amazon.com/images/I/71d6QNV7W+L._SX679_.jpg",'https://m.media-amazon.com/images/I/81HLMqEh1qL._SX522_.jpg','https://m.media-amazon.com/images/I/713D1eLsaqL._SL1500_.jpg','https://m.media-amazon.com/images/I/81kjq2lBl6L._SX522_.jpg','https://m.media-amazon.com/images/I/71MDSbPEjDL._SX522_.jpg','https://m.media-amazon.com/images/I/51lp90IEWTL._SX522_.jpg','https://m.media-amazon.com/images/I/619ovJ4zdLL._SX522_.jpg'],
    },
    {
      id: 3,
      name: "Samsung Galaxy Tab S9 FE ",
      description:
        "Samsung Galaxy Tab S9 FE [Smartchoice], S Pen in-Box, RAM 6 GB, ROM 128 GB Expandable, Wi-Fi, IP68 Tablet, Silver",
      affiliateLink: "https://amzn.to/3Voby2b",
      price: "34,999",
      rating: 4.5,
      images: ["https://m.media-amazon.com/images/I/61E7yk7f0vL._SX466_.jpg",'https://m.media-amazon.com/images/I/51R6E6tf1GL.SX522_.jpg','https://m.media-amazon.com/images/I/51vn1cWChhL._SX466_.jpg','https://m.media-amazon.com/images/I/41H73Oo59PL._SS40_.jpg','https://m.media-amazon.com/images/I/61-zKS98W4L._SX466_.jpg','https://m.media-amazon.com/images/I/719u9OPF4aL._SX466_.jpg','https://m.media-amazon.com/images/I/71a7sKW0bIL._SX466_.jpg'],
    },
    {
      id: 2,
      name: "typecase Keyboard Case for Samsung Galaxy Tab S10 Plus, S9 Plus & S9 FE Plus ",
      description:
        "typecase Keyboard Case for Samsung Galaxy Tab S10 Plus, S9 Plus & S9 FE Plus (12.4 Inch), 7-Colors Backlit & Trackpad, S-Pen Holder, 3-Views Angle, Magnetically Detachable Keyboard (NOT Fit S10 FE+)",
      affiliateLink: "https://amzn.to/46py0Nn",
      price: "2,944",
      rating: 3.8,
      images: ["https://m.media-amazon.com/images/I/71hnzGzHMnL._SX679_.jpg",'https://m.media-amazon.com/images/I/618NzU-v7NL.SX522_.jpg','https://m.media-amazon.com/images/I/71XicL8AMYL._SX679_.jpg','https://m.media-amazon.com/images/I/71kuBxvywVL._SX679_.jpg','https://m.media-amazon.com/images/I/71aMBKVlA7L._SX679_.jpg','https://m.media-amazon.com/images/I/71fcMDfRT6L._SX679_.jpg'],
    },
    {
      id: 1,
      name: "Samsung Galaxy Tab S9 FE+ ",
      description:
        "Samsung Galaxy Tab S9 FE+ 31.50 cm (12.4 inch) Display, RAM 8 GB, ROM 128 GB Expandable, S Pen in-Box, Wi-Fi, IP68 Tablet, Gray",
      affiliateLink: "https://amzn.to/3VnLGUg",
      price: "32,389",
      rating: 4.5,
      images: ["https://m.media-amazon.com/images/I/61l5a94VKkL._SX679_.jpg"],
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-12 bg-gray-100 p-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}
