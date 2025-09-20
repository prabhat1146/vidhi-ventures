import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 69,
      name: "Om Phool Batti Cow Ghee Diya Batti for Puja",
      description:
        "Om Phool Batti Cow Ghee Diya Batti for Puja, 30 min Burning Time, 100% Wax Free Pooja Ghee Batti for Home Decoration, Festivals & Religious Rituals | Readymade Cotton Wicks (100)",
      price: 187,
      rating: 5,
      affiliateLink: "https://amzn.to/48pynu1",
      images: [
        "https://m.media-amazon.com/images/I/510z-f6hpHL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/41GOhX+Pc+L._SY679_.jpg",
        "https://m.media-amazon.com/images/I/518PMPSXQrL._SX450_.jpg",
      ],
    },

    {
      id: 68,
      name: " Handmade Ghee Diya Batti",
      description:
        "OGU Ghee Diya Batti, Handmade Ghee Diya Batti, Jyot Batti for Pooja Aarti and Special Occasions - Pack of 100 Pcs.",
      price: 181,
      rating: 5,
      affiliateLink: "https://amzn.to/4pB5X6E",
      images: [
        "https://m.media-amazon.com/images/I/51HciiIfvXL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71YbgooGYSL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/51wx356wAuL._SX425_.jpg",
      ],
    },

    {
      id: 67,
      name: "Crystal Round Metal Akhand Jyot Diya",
      description:
        "ascension Crystal Round Metal Akhand Jyot Diya for Puja Decoration Lightning Diya Oil Lamp for Puja Room Metal Diya for Pooja Deepak with Handle Stand for Mandir Home Office.",
      price: 231,
      rating: 5,
      affiliateLink: "https://amzn.to/42GgV0D",
      images: [
        "https://m.media-amazon.com/images/I/71oDgx3-54L._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71EYVfurgjL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71BGwvH9gLL._SX425_.jpg",
      ],
    },
    {
      id: 66,
      name: "Smart Home Speaker Combo ",
      description:
        "Amazon Echo Pop (Green) Smart Home Speaker Combo with Wipro Simple Setup 9W LED Smart Bulb | with Bluetooth and Alexa.",
      price: 3499,
      rating: 5,
      affiliateLink: "https://amzn.to/3Kug0tT",
      images: [
        "https://m.media-amazon.com/images/I/61Y2eiVNbrL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/31vFLpsJmsL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/51Zq3QHX4pL._SX425_.jpg",
      ],
    },
    {
      id: 65,
      name: "Safari Pentagon Pro 8 Wheels 66Cm Medium Size Checkin Trolley Bag",
      description:
        "Safari Pentagon Pro 8 Wheels 66Cm Medium Size Checkin Trolley Bag, Hard Case Polypropylene 360º Wheeling Luggage for Men & Women, Travel Bag, Suitcase for Travel, Trolley Bags for Travel, Black.",
      price: 1999,
      rating: 5,
      affiliateLink: "https://amzn.to/4mIT9Zn",
      images: [
        "https://m.media-amazon.com/images/I/61NMzYt7QqL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/61kHZFOjlWL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/613SciJO2CL._SX425_.jpg",
      ],
    },
    {
      id: 64,
      name: "STRIFF Adjustable Laptop Tabletop Stand",
      description:
        "STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black).",
      price: 229,
      rating: 5,
      affiliateLink: "https://amzn.to/4gAEXA2",
      images: [
        "https://m.media-amazon.com/images/I/71Zf9uUp+GL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/61GC3dc1skL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/61RY+DwiGkL._SY355_.jpg",
      ],
    },
    {
      id: 63,
      name: "Jacket for men",
      description:
        "Lymio Jackets || Jacket for men || Lightweight Outwear Jacket (J-04-06).",
      price: 579,
      rating: 5,
      affiliateLink: "https://amzn.to/3Vslh7J",
      images: [
        "https://m.media-amazon.com/images/I/61N03oj9kyL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/51ohPziTynL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/71KGxvT0NEL._SY550_.jpg",
      ],
    },
    {
      id: 62,
      name: " Polo T Shirt for Men",
      description:
        "Lymio Polo T Shirt for Men || Men Casual T-Shirt || Available in Combo Packs (Polo 40 to 43)",
      price: "-85% ₹749",
      "M.R.P.": "₹4,999",
      rating: 5,
      affiliateLink: "https://amzn.to/42BVfTi",
      images: [
        "https://m.media-amazon.com/images/I/71CV85vxClL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71hWUifQSLL._SY550_.jpg",
      ],
    },
    {
      id: 61,
      name: "Orient Electric Ceiling Fan",
      description:
        "Orient Electric I Tome Pro 900 mm BLDC Ceiling Fan with Remote | BEE 5-star rated Energy Saving Fan | 3-year warranty by Orient | (Space Grey).",
      price: "-41% ₹2,899",
      "M.R.P.": "₹4,935",
      rating: 5,
      affiliateLink: "https://amzn.to/46aIilO",
      images: [
        "https://m.media-amazon.com/images/I/61s615eitpL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/717j+dDx37L._SX425_.jpg",
      ],
    },

    {
      id: 60,
      name: "Printed Kurta with Pant & Dupatta",
      description:
        "ANNI Designer Women's Rayon Viscose Straight Printed Kurta with Pant & Dupatta.",
      price: "-75% ₹649 M.R.P.: ₹2,599",
      rating: 5,
      affiliateLink: "https://amzn.to/3KbWdzp",
      images: [
        "https://m.media-amazon.com/images/I/61lcu95FSYL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/71LRDxdwYsL._SX425_.jpg",
      ],
    },

    {
      id: 59,
      name: "Borosil Chef Delite 300 Watts Electric Chopper for Kitchen",
      description:
        "Borosil Chef Delite 300 Watts Electric Chopper for Kitchen, Twin Blade Technology, 600 ml 'chop-n-store' plastic bowl with lid, Vegetable Chopper, Cutter, Chop, Mince, Dice, Whisk, Blend.",
      price: "-22% ₹1,949",
      rating: 5,
      affiliateLink: "https://amzn.to/4gzVdRO",
      images: [
        "https://m.media-amazon.com/images/I/51HKajX7fJL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/617wybbHq6L._SX425_.jpg",
      ],
    },

    {
      id: 58,
      name: "Duffle Bag for Travel for Men and Women",
      description:
        "Fur Jaden Brown Textured Leatherette Stylish & Spacious Weekender Duffle Bag for Travel for Men and Women.",
      price: "-81% ₹749",
      rating: 5,
      affiliateLink:
        "https://www.amazon.in/FUR-JADEN-Leatherette-Polypropylene-DUFF05/dp/B07M9BRCQ5?ref=dlx_deals_dg_dcl_B07M9BRCQ5_dt_sl10_57_pi_dealz_tr_mdl&pf_rd_r=XNKDDWX7WZSXQ796QBEY&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [
        "https://m.media-amazon.com/images/I/71-8gqDAalL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/81PuH0dlNEL._SX425_.jpg",
      ],
    },

    {
      id: 57,
      name: "Bajaj ATX 4 750 watts 2-Slice Pop-up Toaster",
      description:
        "Bajaj ATX 4 750 watts 2-Slice Pop-up Toaster | Dust Cover & Slide Out Crumb Tray | 6-Level Browning Controls | Mid-Cycle Cancel Feature | 2-Yr Warranty | 750 watts | Electric Toaster 【White】.",
      price: "-41% ₹1,270",
      rating: 5,
      affiliateLink:
        "https://www.amazon.in/Bajaj-Browning-Controls-Mid-Cycle-Warranty/dp/B0073QGKAS?ref=dlx_deals_dg_dcl_B0073QGKAS_dt_sl10_57_pi_dealz_tr_mdl&pf_rd_r=J6RCEBCMRGH1X1M51P09&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57",
      images: [
        "https://m.media-amazon.com/images/I/61fgJs4zIqL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71lTAaPDTYL._SX425_.jpg",
      ],
    },

    {
      id: 56,
      name: "Induction Cooktop with Free Stainless Steel Grill",
      description:
        "Longway Infralite Pro ICT 2200 W Infrared Induction Cooktop with Free Stainless Steel Grill | Auto Shut Off & Overheat Protection (Black, Touch Control).",
      price: "₹6,159",
      discount: "-69 % off",
      discounted_price: "₹6,159",
      rating: 5,
      affiliateLink: "https://amzn.to/3IxOmvB",
      images: [
        "https://m.media-amazon.com/images/I/61iWKqpyBhL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71E-Y3j6lQL._SX425_.jpg",
      ],
    },

    {
      id: 55,
      name: "STRIFF Smartphone Stand",
      description:
        "STRIFF Smartphone Stand, Tabletop, Foldable, Mobile Phone Stand, Tablet Stand, Smartphone Holder, Adjustable Height, Anti-Slip, Lightweight, Compact, Portrait and Horizontal, Easy to Carry(Sky).",
      price: "₹999",
      discount: "-90 % off",
      discounted_price: "₹99",
      rating: 5,
      affiliateLink: "https://amzn.to/3VpULMo",
      images: [
        "https://m.media-amazon.com/images/I/61x9KMaUoML._SY355_.jpg",
        "https://m.media-amazon.com/images/I/617hlEgVPHL._SY355_.jpg",
      ],
    },

    {
      id: 54,
      name: "FABNEX Kurta Pant and Dupatta Set for Women",
      description:
        "FABNEX Kurta Pant and Dupatta Set for Women | Kurta Set for Women (K-71-118).",
      price: "₹4,999",
      discount: "-90 % off",
      discounted_price: "₹499",
      rating: 5,
      affiliateLink: "https://amzn.to/4ngPnaw",
      images: [
        "https://m.media-amazon.com/images/I/51gRfZuFkhL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/61f3UWT1ORL._SY550_.jpg",
      ],
    },

    {
      id: 53,
      name: "Professional Ring Light 15W with Stand & Table Tripod Lighting",
      description:
        "Osaka 14'' Professional Ring Light 15W with Stand & Table Tripod Lighting 2 Color Modes for Photo Video Shoot Live Stream Makeup Compatible with iPhone & Smartphone with Bluetooth for Android/iOS.",
      price: "₹8,000",
      discount: "-85 % off",
      discounted_price: "₹1,199",
      rating: 5,
      affiliateLink: "https://amzn.to/4nDkf4G",
      images: [
        "https://m.media-amazon.com/images/I/61I+V3SGfKL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71EfguW9xDL._SY450_.jpg",
      ],
    },

    {
      id: 52,
      name: "Springtek Premium Luxe Micro Fibre Mattress Topper for Queen Size Bed ",
      description:
        "Springtek Premium Luxe Micro Fibre Mattress Topper for Queen Size Bed | Queen Bed Topper 78'x60' | 2' Padding | Super Soft Mattress Padding for Comfortable Sleep | 78 by 60 Inch, White.",
      price: "₹12,499",
      discount: "-67% off",
      discounted_price: "₹4,140",
      rating: 5,
      affiliateLink: "https://amzn.to/3I61ckH",
      images: [
        "https://m.media-amazon.com/images/I/71HuzIVmlSL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71BTyCtvL3L._SX425_.jpg",
      ],
    },

    {
      id: 51,
      name: "Power Bank, 10000 mAh",
      description:
        "ZEBRONICS MB10000S4 Power Bank, 10000 mAh, 12W, Dual USB Output, Type C & Micro USB Input, Built in Protections, Percentage LED Display, Included USB to Type C Cable, Made in India(Black).",
      price: "₹1,699",
      discount: "-72% off",
      discounted_price: "₹479",

      rating: 5,
      affiliateLink: "https://amzn.to/3IvHEpR",
      images: [
        "https://m.media-amazon.com/images/I/61HgzHGMBBL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/71ZgXqDUqcL._SX425_.jpg",
      ],
    },

    {
      id: 50,
      name: "HP H200 On Ear Wireless Headset, Black",
      description: "HP H200 On Ear Wireless Headset, Black.",
      price: "₹3,749",
      discount: "-73% off",
      discounted_price: "₹999",
      rating: 5,
      affiliateLink: "https://amzn.to/46Lir40",
      images: [
        "https://m.media-amazon.com/images/I/71Yl4L6JVML._SY355_.jpg",
        "https://m.media-amazon.com/images/I/714U6QaISqL._SY355_.jpg",
      ],
    },

    {
      id: 49,
      name: "boAt Bassheads 900 Pro Wired Headphones",
      description:
        "boAt Bassheads 900 Pro Wired Headphones with 40Mm Drivers, Lightweight Foldable Design, Over Ear, Remote Control, Unidirectional Retractable Mic, Adjustable Headband & USB Type-A Compatibility(Black).",
      price: "₹4,990",
      discount: "-80% off",
      discounted_price: "₹999",
      rating: 5,
      affiliateLink: "https://amzn.to/46aIilO",
      images: [
        "https://m.media-amazon.com/images/I/71Yid63OspL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/71lK-WCRvdL._SY355_.jpg",
      ],
    },

    {
      id: 48,
      name: "Premium Wired Gaming On Ear Headphone",
      description:
        "ZEBRONICS Jet Premium Wired Gaming On Ear Headphone with LED Light for earcups, 40mm Neodymium Drivers, 2 Meter Braided Cable, Flexible mic, Suspension Headband, 3.5mm + USB Connector (Black + Blue).",
      price: "₹1,699",
      discount: "-59% off",
      discounted_price: "₹689",
      rating: 5,
      affiliateLink: "https://amzn.to/3K3Mhbk",
      images: [
        "https://m.media-amazon.com/images/I/71D1EB5iDzL._SY355_.jpg",
        "https://m.media-amazon.com/images/I/61iuQZxzcCL._SY355_.jpg",
      ],
    },

    {
      id: 47,
      name: "Om Phool Batti Cow Ghee Diya for Puja",
      description:
        "Om Phool Batti Cow Ghee Diya for Puja, 30 min Burning Time, 100% Wax Free Ghee Batti for Pooja, Festivals & Religious Rituals | Readymade Ghee Diya batti (100).",
      price: "₹1,497",
      discount: "-88% off",
      discounted_price: "₹178",
      rating: 5,
      affiliateLink: "https://amzn.to/48onvMU",
      images: [
        "https://m.media-amazon.com/images/I/61ZouHLGmlL._SY550_.jpg",
        "https://m.media-amazon.com/images/I/61T5Qc3FbML._SX522_.jpg",
      ],
    },

    {
      id: 46,
      name: "S K D Cow Ghee Diya (100 Pieces)",
      description:
        "S K D Cow Ghee Diya (100 Pieces),15min Burning Time, Wax Free Cow Ghee Diya Batti, Pack of 1.",
      price: "₹499",
      discount: "-60 % off",
      discounted_price: "₹199",

      rating: 5,
      affiliateLink: "https://amzn.to/3Itz378",
      images: [
        "https://m.media-amazon.com/images/I/71xW9YNPjUL._SX425_.jpg",
        "https://m.media-amazon.com/images/I/61HuO1HoiTL._SX425_.jpg",
      ],
    },

    {
      id: 45,
      name: "Electronic Keypad Locker for Home",
      description:
        "Amazon Basics Digital Safe with Electronic Keypad Locker for Home, Gross Capacity - 49L (Net - 43L), Grey.",
      price: "₹11,999",
      discount: "-50 % off",
      discounted_price: "₹5,999",
      rating: 5,
      affiliateLink: "https://amzn.to/46RqwTV",
      images: [
        "https://m.media-amazon.com/images/I/61IcIsU7oAL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/61xO7Qg57nL._SX569_.jpg",
      ],
    },

    {
      id: 44,
      name: "Washing Machine AquaSpin0075P (Black)",
      description:
        "VW 7.5 kg 5 Star Aqua Spin Semi Automatic Top Load Washing Machine AquaSpin0075P (Black).",
      price: "₹18,999",
      discount: "-64 % off",
      discounted_price: "₹6,799",
      rating: 5,
      affiliateLink: "https://amzn.to/48q9Dlo",
      images: [
        "https://m.media-amazon.com/images/I/817+GVxp-6L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81BedvE-1LL._SX679_.jpg",
      ],
    },

    {
      id: 43,
      name: "BELLAVITA CEO Man & White Oud Unisex",
      description:
        "BELLAVITA CEO Man & White Oud Unisex | Long Lasting Perfume for Man and Woman | EDP 2x20ml | Tonka, Agarwood & Orange | Woody, Spicy, Citrus Premium Fragrance for Men & Women.",
      price: "₹748",
      discount: "-75 % off",
      discounted_price: "₹189",

      rating: 5,
      affiliateLink:
        "https://www.amazon.in/Bella-Vita-Luxury-Agarwood-Fragrance/dp/B0CHW268JT?ref=dlx_deals_dg_dcl_B0CHW268JT_dt_sl10_57_pi_dealz_tr_mdl&pf_rd_r=G67MB0AJ20TSY8CPH2PS&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57",
      images: [
        "https://m.media-amazon.com/images/I/519mdAYKTQL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/71K2D1ENhpL._SY450_.jpg",
      ],
    },

    {
      id: 42,
      name: "STRIFF Gel_Wrist_Support Mouse pad",
      description:
        "STRIFF Gel_Wrist_Support Mouse pad with, Gaming Mouse Pad with Lycra Cloth Nonslip for Laptop, Computer, Home & Office (Black).",
      price: "₹999",
      discount: "-86 % off",
      discounted_price: "₹139",
      rating: 5,
      affiliateLink: "https://amzn.to/3Vnkbds",
      images: [
        "https://m.media-amazon.com/images/I/51+AOv4CMmL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/71XdPxgq3zL._SY450_.jpg",
      ],
    },

    {
      id: 41,
      name: "Blackout Window Curtains 5 Feet Long Set of 2 ",
      description:
        "Story@Home Blackout Window Curtains 5 Feet Long Set of 2 | Plain Printed | 70% Room Darkening Curtain | Thermal Insulated Curtains for Living Room | (116 x 152 cm, Tan) | Perfect for Home Decor.",
      price: "₹3,198",
      discount: "-69 % off",
      discounted_price: "₹995",
      rating: 5,
      affiliateLink: "https://amzn.to/4nf6DNr",
      images: [
        "https://m.media-amazon.com/images/I/71Xoopo7MXL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81dwT+XwXXL._SX679_.jpg",
      ],
    },

    {
      id: 40,
      name: "Ethnic Motifs Printed Long Regular Kurta",
      description:
        "Majestic Man Men's Cotton Regular Fit Casual Mandarin Collar Ethnic Motifs Printed Long Regular Kurta.",
      price: "₹2,499",
      discount: "-72 % off",
      discounted_price: "₹699",
      rating: 5,
      affiliateLink: "https://amzn.to/3Kav7Zz",
      images: [
        "https://m.media-amazon.com/images/I/711YfcFNl+L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71d7ZXmNcVL._SY741_.jpg",
      ],
    },

    {
      id: 39,
      name: "Men Cargo Pants",
      description:
        "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-117-120).",
      price: "₹4,999",
      discount: "-85 % off",
      discounted_price: "₹749",
      rating: 5,
      affiliateLink:
        "https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-118-Grey-M/dp/B0DRFNDSNX/ref=pd_rhf_ee_s_pd_crcd_d_sccl_1_5/258-8919416-4019834?pd_rd_w=cT5GJ&content-id=amzn1.sym.7edc8fe7-49c8-4837-acf4-779a8e8647e2&pf_rd_p=7edc8fe7-49c8-4837-acf4-779a8e8647e2&pf_rd_r=79QWXK7CD3BRRS51S74Z&pd_rd_wg=nW4ZQ&pd_rd_r=e96647d3-628f-49d9-a573-7c250b0e3e20&pd_rd_i=B0DRFNDSNX&th=1&psc=1",
      images: [
        "https://m.media-amazon.com/images/I/61rDp+s9DkL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61IME+s7ObL._SY741_.jpg",
      ],
    },

    {
      id: 38,
      name: "Lymio Men's Regular Fit Low Rise Cotton Cargos Pants (Cargo-01-04)",
      description:
        "Lymio Men's Regular Fit Low Rise Cotton Cargos Pants (Cargo-01-04).",
      price: "₹4,999",
      discount: "-87 % off",
      discounted_price: "₹649",

      rating: 5,
      affiliateLink: "https://amzn.to/4nDf58K",
      images: [
        "https://m.media-amazon.com/images/I/51F4c7KhWXL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/51QsIhdNNOL.jpg",
      ],
    },

    {
      id: 37,
      name: "HAMMER Drop 5W Bluetooth Wireless Speaker",
      description:
        "HAMMER Drop 5W Bluetooth Wireless Speaker with Twin Pairing, 1200 mAh Battery, 100H Standby Time, TWS Function, TF Card, USB Slot, Auto-Pairing, in-Built Mic, Type-C Charging, 52mm Driver (Green).",
      price: "₹3,499",
      discount: "-83 % off",
      discounted_price: "₹594",
      rating: 5,
      affiliateLink: "https://amzn.to/46KGCzw",
      images: [
        "https://m.media-amazon.com/images/I/61kQ3rY82ML._SY450_.jpg",
        "https://m.media-amazon.com/images/I/71SQrAqnDHL._SY450_.jpg",
      ],
    },

    {
      id: 36,
      name: "Transparent Wireless Bluetooth Mouse with Dual Wireless",
      description:
        "Portronics Toad 8 Transparent Wireless Bluetooth Mouse with Dual Wireless (BT + 2.4 GHz), Rechargeable Battery, Noise-Free Clicking, Show/Hide Desktop, Multi-Device Pair, Adjust Sensitivity (Grey).",
      price: "₹1,499",
      discount: "-61 % off",
      discounted_price: "₹579",
      rating: 5,
      affiliateLink: "https://amzn.to/4nErPvU",
      images: [
        "https://m.media-amazon.com/images/I/61ILLwwQLLL._SY450_.jpg",
        "https://m.media-amazon.com/images/I/71LrPg4tUDL._SY450_.jpg",
      ],
    },

    {
      id: 35,
      name: "Cargo Jeans (Q-04-05)",
      description: "Men Jeans || Jeans for Men || Cargo Jeans (Q-04-05).",
      price: "₹4,999",
      discount: "-84 % off",
      discounted_price: "₹779",
      rating: 5,
      affiliateLink: "https://amzn.to/3VWrx7R",
      images: [
        "https://m.media-amazon.com/images/I/81BxliokD0L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81Zjys1iduL._SY741_.jpg",
      ],
    },

    {
      id: 34,
      name: "Men Cargo Pants Cotton",
      description:
        "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant (Cargo-46-49).",
      price: "₹4,999",
      discount:" -84 % off",
      discounted_price: "₹799",
      rating: 5,
      affiliateLink: "https://amzn.to/48okv38",
      images: [
        "https://m.media-amazon.com/images/I/61vMoxKNd1L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71lutqBwtaL._SY741_.jpg",
      ],
    },

    {
      id: 33,
      name: "Cotton Cargo Pants for Men ",
      description:
        "Lymio Men Cargo || Cotton Cargo Pants for Men || Regular Fit High Rise Solid Pants (1Cargo-34-37).",
      price: "₹4,599",
      discount:" -84 % off",
      discounted_price: "₹749",
      rating: 5,
      affiliateLink: "https://amzn.to/4gyxG3M",
      images: [
        "https://m.media-amazon.com/images/I/61kjvN8OtvL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61reH2X+acL._SY741_.jpg",
      ],
    },

    {
      id: 32,
      name: "Women's Kanjivaram Art Silk Saree Soft Banarasi Style Sari",
      description:
        "C J Enterprise Women's Kanjivaram Art Silk Saree Soft Banarasi Style Sari With Blouse Piece For Wedding (Pari122-51).",
      price: "₹999",
      discount: "-51 % off",
      discounted_price: "₹489",
      rating: 5,
      affiliateLink:
        "https://www.amazon.in/Enterprise-Banarasi-Kanjivaram-collections-Wedding/dp/B0C1SPQJH1?ref=dlx_deals_dg_dcl_B0C1SPQJH1_dt_sl10_57_pi&pf_rd_r=JH044793R26YSCDV5SGR&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [
        "https://m.media-amazon.com/images/I/61t5Rq80yeL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61jx1sMIBfL._SY741_.jpg",
      ],
    },

    {
      id: 31,
      name: "Banarasi Saree Pure Kanjivaram Silk Saree ",
      description:
        "Sugathari Women's Banarasi Saree Pure Kanjivaram Silk Saree Soft new ladies 2023 Design Wear Pattu Sarees Latest Party Sari collections With Blouse Piece for Wedding sadi (SAN PARI-182 DARK GREEN).",
      price: "₹2,299",
      discount: "-80 % off",
      discounted_price: "₹466",
      rating: 5,
      affiliateLink: "https://amzn.to/46AQhHR",
      images: [
        "https://m.media-amazon.com/images/I/812Joj7iEnL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81XEFdA4EnL._SY741_.jpg",
      ],
    },

    {
      id: 30,
      name: "Banarasi Saree Pure Kanjivaram Silk Saree",
      description:
        "Sugathari Women's Banarasi Saree Pure Kanjivaram Silk Saree Soft new ladies 2023 Design Wear Pattu Sarees Latest Cotton Party Sari collections With Blouse Piece for Wedding sadi (SAM PARI-100).",
      price: "₹2,499",
      discount: "-81 % off",
      discounted_price: "₹466",
      rating: 5,
      affiliateLink: "https://amzn.to/4nDg8We",
      images: [
        "https://m.media-amazon.com/images/I/71zCIpT4j4L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81svcp1AzaL._SY741_.jpg",
      ],
    },

    {
      id: 29,
      name: "Printed Kurta with Pant & Dupatta",
      description:
        "GoSriKi Women's Rayon Viscose Straight Bandhej Printed Kurta with Pant & Dupatta.",
      price: "₹2,599",
      discount: "-76 % off",
      discounted_price: "₹629",
      rating: 5,
      affiliateLink:
        "https://www.amazon.in/GoSriKi-Bandhani-Printed-Straight-TURAE-RED-GS_XL_Red_X-Large/dp/B0D1CQPWZ8/ref=pd_rhf_dp_s_pd_crcbs_d_sccl_1_4/258-8919416-4019834?pd_rd_w=nzeOz&content-id=amzn1.sym.bc7f710c-555f-4ed6-8aed-005a29b438d8&pf_rd_p=bc7f710c-555f-4ed6-8aed-005a29b438d8&pf_rd_r=JE8727Y5MTVAHG3D79R2&pd_rd_wg=QnhyR&pd_rd_r=0bf2b7d7-1317-447c-b337-04d651d4904d&pd_rd_i=B0D1CQPWZ8&th=1&psc=1",
      images: [
        "https://m.media-amazon.com/images/I/610InQb9rTL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/817ILrKnthL._SX569_.jpg",
      ],
    },

    {
      id: 28,
      name: "Kurta Set with Pant & Dupatta",
      description:
        "GoSriKi Women’s Cotton Blend Embroidered Kurta Set with Pant & Dupatta – Straight Calf‑Length, 3/4 Sleeve, Round Neck – Elegant Ethnic Attire (5 Colors, S–5XL).",
      price: "₹2,599",
      discount: "-73 % off",
      discounted_price: "₹699",
      rating: 5,
      affiliateLink: "https://amzn.to/420LbDf",
      images: [
        "https://m.media-amazon.com/images/I/61SgADmAyDL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61ILnUNj20L._SY741_.jpg",
      ],
    },

    {
      id: 27,
      name: "Elegant Wine Anarkali Kurta Set with Dupatta",
      description:
        "GoSriKi Women’s Elegant Wine Anarkali Kurta Set with Dupatta | Printed Traditional Soft Rayon Fabric.",
      price: "₹2,599",
      discount: "-74 % off",
      discounted_price: "₹684",
      rating: 5,
      affiliateLink: "https://amzn.to/3Kd6JGD",
      images: [
        "https://m.media-amazon.com/images/I/71BegyZ014L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81xL0+JAdfL._SY741_.jpg",
      ],
    },

    {
      id: 26,
      name: "GoSriKi Women's Rayon Blend Anarkali Solid Kurta with Pant & Dupatta",
      description:
        "GoSriKi Women's Rayon Blend Anarkali Solid Kurta with Pant & Dupatta.",
      price: "₹2,599",
      discount: "-69 % off",
      discounted_price: "₹799",
      rating: 5,
      affiliateLink: "https://amzn.to/4pxG1Zm",
      images: [
        "https://m.media-amazon.com/images/I/71uo6P1JAdL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81HKJAGElwL._SX679_.jpg",
      ],
    },

    {
      id: 25,
      name: "Banarasi Saree Pure Kanjivaram Silk Saree",
      description:
        "Sugathari Women's Banarasi Saree Pure Kanjivaram Silk Saree Soft new ladies 2023 Design Wear Pattu Sarees Latest Cotton Party Sari collections With Blouse Piece for Wedding sadi (SAM PARI-100).",
      price: "₹2,499",
      discount: "-81 % off",
      discounted_price: "₹466",
      rating: 5,
      affiliateLink: "https://amzn.to/4puMRyU",
      images: [
        "https://m.media-amazon.com/images/I/71adP+uM57L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81Xcra4k2AL._SY741_.jpg",
      ],
    },

    {
      id: 25,
      name: " Lymio Men Cargo ",
      description:
        "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant (Cargo-46-49)",
      price: 799,
      rating: 5,
      affiliateLink: "https://amzn.to/4mqX3WD",
      images: ["https://m.media-amazon.com/images/I/61vMoxKNd1L._SY741_.jpg"],
    },

    {
      id: 24,
      name: " Lymio Men's Regular Fit Low Rise Cargo ",
      description:
        " Lymio Men's Regular Fit Low Rise Cargo || Cotton Cargo Pants ||(Cargo-38-41)",
      price: 699,
      rating: 5,
      affiliateLink: " https://amzn.to/4nH91wm ",
      images: [" https://m.media-amazon.com/images/I/61fScC033bL._SY741_.jpg "],
    },

    {
      id: 23,
      name: " Desidiya® Touch Silicone Panda Light ",
      description:
        " Desidiya® Touch Silicone Panda Light – Night Light for Kids, Girls & Boys | Cute Bedroom Decor for Women | Valentine Special",
      price: 389,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Desidiya%C2%AE-Silicone-Rechargeable-Decoration-Home-Close/dp/B0C7NYSFXD/ref=zg_bs_c_kitchen_d_sccl_13/258-8919416-4019834?pd_rd_w=IuNcf&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=EA828G04JAW81AP41ZYT&pd_rd_wg=PzKVq&pd_rd_r=e9d75c2b-dffb-4a86-a31e-9b9f816e0e06&pd_rd_i=B0C7NYSFXD&psc=1 ",
      images: [" https://m.media-amazon.com/images/I/61cjyX88PyL._SX679_.jpg "],
    },

    {
      id: 22,
      name: " Desidiya® Moon Crystal Ball Night Light ",
      description:
        "Desidiya Moon Crystal Ball Night Light,2.4 Inch Glass Ball Night LED Lamp with Woodern Base,Decorations Gifts for Men,Women,Kids,Boys,Girls,Teens",
      price: 173,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/dp/B0D2P9JK11/ref=sspa_dk_detail_0?pd_rd_i=B0D2P9JK11&pd_rd_w=6UGjO&content-id=amzn1.sym.67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_p=67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_r=FVWJZ2TPXAYG2968G13S&pd_rd_wg=8pDc5&pd_rd_r=688e2dd5-ef12-4020-a671-eec42176fb4d&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
      images: [" https://m.media-amazon.com/images/I/61XWYda0HoL._SX679_.jpg "],
    },

    {
      id: 21,
      name: " Women's Anarkali Kurta Set with Dupatta ",
      description:
        "ANNI DESIGNER Women's Anarkali Kurta Set with Dupatta | Pure Cotton Suit Set for Women | Ajrakh Print Kurta Palazzo Dupatta Set | 3 Piece Ethnic Wear for Festival & Party",
      price: 739,
      rating: 5,
      affiliateLink: " https://amzn.to/3VWy2HM",
      images: [" https://m.media-amazon.com/images/I/81T1HMOZ0mL._SX569_.jpg"],
    },

    {
      id: 20,
      name: " KLOSIA Women Printed Anarkali Kurta and Pant Set with Dupatta",
      description:
        "KLOSIA Women Printed Anarkali Kurta and Pant Set with Dupatta",
      price: 799,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/KLOSIA-Women-Printed-Anarkali-Dupatta/dp/B0FDW6BD6C/ref=pd_sbs_d_sccl_1_1/258-8919416-4019834?pd_rd_w=rwjGl&content-id=amzn1.sym.6d240404-f8ea-42f5-98fe-bf3c8ec77086&pf_rd_p=6d240404-f8ea-42f5-98fe-bf3c8ec77086&pf_rd_r=5S0X3CNWDZ123XE9ESXP&pd_rd_wg=GDKAy&pd_rd_r=7c674f5c-2919-4a82-a7c6-8dba15387fb4&pd_rd_i=B0FDW6BD6C&th=1&psc=1",
      images: [" https://m.media-amazon.com/images/I/71I53evweVL._SY741_.jpg"],
    },

    {
      id: 19,
      name: " Women's Printed Anarkali Kurta Pant Set with Dupatta ",
      description:
        "Amazon Brand - Myx Women's Printed Anarkali Kurta Pant Set with Dupatta",
      price: 499,
      rating: 5,
      affiliateLink: " https://amzn.to/3KaN9e4",
      images: [" https://m.media-amazon.com/images/I/81vUDpWXG0L._SX569_.jpg "],
    },

    {
      id: 18,
      name: " Women's Printed A-line Kurta Pant Set with Dupatta ",
      description:
        "Amazon Brand - Myx Women's Printed A-line Kurta Pant Set with Dupatta",
      price: 499,
      rating: 5,
      affiliateLink: " https://amzn.to/4ptj8Xd",
      images: [" https://m.media-amazon.com/images/I/816FKhXzFNL._SX569_.jpg"],
    },
    {
      id: 17,
      name: " Backpack-Compartment-Charging-Organizer ",
      description:
        "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
      price: 579,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Number-Backpack-Compartment-Charging-Organizer/dp/B09VTDMRY7?ref=dlx_deals_dg_dcl_B09VTDMRY7_dt_sl10_57_pi&pf_rd_r=F5E1SJM7CNY865QBE0PA&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [" https://m.media-amazon.com/images/I/61egMfcDWlL._SX679_.jpg "],
    },

    {
      id: 16,
      name: " The Man Company Premium Perfume Gift Set for Men ",
      description:
        "The Man Company Premium Perfume Gift Set for Men 4 X 50ml with a Travel Bag - A Gentleman's Choice | Luxury Long-Lasting Fragrance For Men | perfume gift for friend | anniversary fragrance gift set| Diwali perfume gift set| For Party, Outing, Office & Date",
      price: 722,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Man-Company-Perfume-Gift-50ml/dp/B0CKHX3T7W?ref=dlx_deals_dg_dcl_B0CKHX3T7W_dt_sl10_57_pi&pf_rd_r=5PN9R99G0GV5QNJTVB0H&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [
        " https://m.media-amazon.com/images/I/61UeAyVYyHL._SX679_PIbundle-4,TopRight,0,0_SX679SY573SH20_.jpg",
      ],
    },
    {
      id: 15,
      name: " The Man Company Premium Perfume Gift Set for Men ",
      description:
        "The Man Company Premium Perfume Gift Set for Men 4 X 50ml with a Travel Bag - A Gentleman's Choice | Luxury Long-Lasting Fragrance For Men | perfume gift for friend | anniversary fragrance gift set| Diwali perfume gift set| For Party, Outing, Office & Date",
      price: 722,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Man-Company-Perfume-Gift-50ml/dp/B0CKHX3T7W?ref=dlx_deals_dg_dcl_B0CKHX3T7W_dt_sl10_57_pi&pf_rd_r=5PN9R99G0GV5QNJTVB0H&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [
        " https://m.media-amazon.com/images/I/61UeAyVYyHL._SX679_PIbundle-4,TopRight,0,0_SX679SY573SH20_.jpg",
      ],
    },

    {
      id: 14,
      name: " Backpack-Compartment-Charging-Organizer ",
      description:
        "FUR JADEN Anti Theft Number Lock Backpack Bag with 15.6 Inch Laptop Compartment, USB Charging Port & Organizer Pocket for Men Women Boys Girls",
      price: 579,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Number-Backpack-Compartment-Charging-Organizer/dp/B09VTDMRY7?ref=dlx_deals_dg_dcl_B09VTDMRY7_dt_sl10_57_pi&pf_rd_r=F5E1SJM7CNY865QBE0PA&pf_rd_p=4aa1ec30-42c5-481c-8f72-6d38d1fd7d57&th=1",
      images: [" https://m.media-amazon.com/images/I/61egMfcDWlL._SX679_.jpg "],
    },

    {
      id: 13,
      name: " Women's Printed A-line Kurta Pant Set with Dupatta ",
      description:
        "Amazon Brand - Myx Women's Printed A-line Kurta Pant Set with Dupatta",
      price: 499,
      rating: 5,
      affiliateLink: " https://amzn.to/4ptj8Xd",
      images: [" https://m.media-amazon.com/images/I/816FKhXzFNL._SX569_.jpg"],
    },

    {
      id: 12,
      name: " Women's Printed Anarkali Kurta Pant Set with Dupatta ",
      description:
        "Amazon Brand - Myx Women's Printed Anarkali Kurta Pant Set with Dupatta",
      price: 499,
      rating: 5,
      affiliateLink: " https://amzn.to/3KaN9e4",
      images: [" https://m.media-amazon.com/images/I/81vUDpWXG0L._SX569_.jpg "],
    },

    {
      id: 11,
      name: " KLOSIA Women Printed Anarkali Kurta and Pant Set with Dupatta",
      description:
        "KLOSIA Women Printed Anarkali Kurta and Pant Set with Dupatta",
      price: 799,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/KLOSIA-Women-Printed-Anarkali-Dupatta/dp/B0FDW6BD6C/ref=pd_sbs_d_sccl_1_1/258-8919416-4019834?pd_rd_w=rwjGl&content-id=amzn1.sym.6d240404-f8ea-42f5-98fe-bf3c8ec77086&pf_rd_p=6d240404-f8ea-42f5-98fe-bf3c8ec77086&pf_rd_r=5S0X3CNWDZ123XE9ESXP&pd_rd_wg=GDKAy&pd_rd_r=7c674f5c-2919-4a82-a7c6-8dba15387fb4&pd_rd_i=B0FDW6BD6C&th=1&psc=1",
      images: [" https://m.media-amazon.com/images/I/71I53evweVL._SY741_.jpg"],
    },

    {
      id: 10,
      name: " Women's Anarkali Kurta Set with Dupatta ",
      description:
        "ANNI DESIGNER Women's Anarkali Kurta Set with Dupatta | Pure Cotton Suit Set for Women | Ajrakh Print Kurta Palazzo Dupatta Set | 3 Piece Ethnic Wear for Festival & Party",
      price: 739,
      rating: 5,
      affiliateLink: " https://amzn.to/3VWy2HM",
      images: [" https://m.media-amazon.com/images/I/81T1HMOZ0mL._SX569_.jpg"],
    },

    {
      id: 9,
      name: " Desidiya® Moon Crystal Ball Night Light ",
      description:
        "Desidiya Moon Crystal Ball Night Light,2.4 Inch Glass Ball Night LED Lamp with Woodern Base,Decorations Gifts for Men,Women,Kids,Boys,Girls,Teens",
      price: 173,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/dp/B0D2P9JK11/ref=sspa_dk_detail_0?pd_rd_i=B0D2P9JK11&pd_rd_w=6UGjO&content-id=amzn1.sym.67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_p=67d3dec9-3503-44a1-a945-e969d04cca69&pf_rd_r=FVWJZ2TPXAYG2968G13S&pd_rd_wg=8pDc5&pd_rd_r=688e2dd5-ef12-4020-a671-eec42176fb4d&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
      images: [" https://m.media-amazon.com/images/I/61XWYda0HoL._SX679_.jpg "],
    },
    {
      id: 8,
      name: " Desidiya® Touch Silicone Panda Light ",
      description:
        " Desidiya® Touch Silicone Panda Light – Night Light for Kids, Girls & Boys | Cute Bedroom Decor for Women | Valentine Special",

      price: 389,
      rating: 5,
      affiliateLink:
        " https://www.amazon.in/Desidiya%C2%AE-Silicone-Rechargeable-Decoration-Home-Close/dp/B0C7NYSFXD/ref=zg_bs_c_kitchen_d_sccl_13/258-8919416-4019834?pd_rd_w=IuNcf&content-id=amzn1.sym.7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_p=7f3d66f6-5df6-41bc-b3bc-9782a34ce834&pf_rd_r=EA828G04JAW81AP41ZYT&pd_rd_wg=PzKVq&pd_rd_r=e9d75c2b-dffb-4a86-a31e-9b9f816e0e06&pd_rd_i=B0C7NYSFXD&psc=1 ",
      images: [" https://m.media-amazon.com/images/I/61cjyX88PyL._SX679_.jpg "],
    },
    {
      id: 7,
      name: " Lymio Men's Regular Fit Low Rise Cargo ",
      description:
        " Lymio Men's Regular Fit Low Rise Cargo || Cotton Cargo Pants ||(Cargo-38-41)",
      price: 699,
      rating: 5,
      affiliateLink: " https://amzn.to/4nH91wm ",
      images: [" https://m.media-amazon.com/images/I/61fScC033bL._SY741_.jpg "],
    },
    {
      id: 6,
      name: " Lymio Men Cargo ",
      description:
        "Lymio Men Cargo || Men Cargo Pants Cotton || Casual Cargos Pant (Cargo-46-49)",
      price: 799,
      rating: 5,
      affiliateLink: "https://amzn.to/4mqX3WD",
      images: ["https://m.media-amazon.com/images/I/61vMoxKNd1L._SY741_.jpg"],
    },
    {
      id: 5,
      name: "Redmi Pad Pro| Snapdragon 7s Gen 2| 30.7cm(12.1) Tablet ",
      description:
        "Redmi Pad Pro| Snapdragon 7s Gen 2| 30.7cm(12.1) Tablet| 33+ Days Standby|10000mAh| HyperOS| 120Hz|6GB, 128GB| Quad Speakers|Wi-Fi 6| Mist Blue",
      affiliateLink: "https://amzn.to/4gupLV9",
      price: "19,999",
      rating: 4.3,
      images: [
        "https://m.media-amazon.com/images/I/81b8NvM4lYL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/A1tvh7H-H-L.SX522_.png",
        "https://m.media-amazon.com/images/I/716-Pd83heL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/71T784tsDHL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/71ego+19X8L._SX466_.jpg",
        "https://m.media-amazon.com/images/I/61j45IEPw-L._SX466_.jpg",
      ],
    },
    {
      id: 4,
      name: "Happilo 100% Natural Premium California Almonds ",
      description:
        "Happilo 100% Natural Premium California Almonds 1kg Value Pack Pouch & MYFITNESS Chocolate Peanut Butter Smooth 1250g | 22g Protein",
      affiliateLink: "https://amzn.to/4n7rPoi",
      price: "1,459",
      rating: 4.1,
      images: [
        "https://m.media-amazon.com/images/I/71d6QNV7W+L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81HLMqEh1qL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/713D1eLsaqL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81kjq2lBl6L._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71MDSbPEjDL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/51lp90IEWTL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/619ovJ4zdLL._SX522_.jpg",
      ],
    },
    {
      id: 3,
      name: "Samsung Galaxy Tab S9 FE ",
      description:
        "Samsung Galaxy Tab S9 FE [Smartchoice], S Pen in-Box, RAM 6 GB, ROM 128 GB Expandable, Wi-Fi, IP68 Tablet, Silver",
      affiliateLink: "https://amzn.to/3Voby2b",
      price: "34,999",
      rating: 4.5,
      images: [
        "https://m.media-amazon.com/images/I/61E7yk7f0vL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/51R6E6tf1GL.SX522_.jpg",
        "https://m.media-amazon.com/images/I/51vn1cWChhL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/41H73Oo59PL._SS40_.jpg",
        "https://m.media-amazon.com/images/I/61-zKS98W4L._SX466_.jpg",
        "https://m.media-amazon.com/images/I/719u9OPF4aL._SX466_.jpg",
        "https://m.media-amazon.com/images/I/71a7sKW0bIL._SX466_.jpg",
      ],
    },
    {
      id: 2,
      name: "typecase Keyboard Case for Samsung Galaxy Tab S10 Plus, S9 Plus & S9 FE Plus ",
      description:
        "typecase Keyboard Case for Samsung Galaxy Tab S10 Plus, S9 Plus & S9 FE Plus (12.4 Inch), 7-Colors Backlit & Trackpad, S-Pen Holder, 3-Views Angle, Magnetically Detachable Keyboard (NOT Fit S10 FE+)",
      affiliateLink: "https://amzn.to/46py0Nn",
      price: "2,944",
      rating: 3.8,
      images: [
        "https://m.media-amazon.com/images/I/71hnzGzHMnL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/618NzU-v7NL.SX522_.jpg",
        "https://m.media-amazon.com/images/I/71XicL8AMYL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71kuBxvywVL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71aMBKVlA7L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71fcMDfRT6L._SX679_.jpg",
      ],
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
      <div className="min-h-screen mt-12 bg-gray-100 p-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}
