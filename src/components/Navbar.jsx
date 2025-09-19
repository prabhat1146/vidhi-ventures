import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Vidhi Ventures</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/legal/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/legal/contact-us" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Cart */}
        <div className="flex items-center space-x-4">
          <button onClick={()=>{alert("Something went wrong.")}} className="relative">
            <ShoppingCart className="text-gray-700 hover:text-blue-600" size={24} />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
