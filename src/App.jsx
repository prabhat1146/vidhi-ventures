import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const products = [
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
      <Navbar />
      <div className="min-h-screen mt-12 bg-gray-100 p-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}
