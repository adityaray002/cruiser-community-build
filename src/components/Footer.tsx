
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Logo from "/LOGOFINAL.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Social */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="CleanCruisers Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">CleanCruisers</span>
          </div>
          <p className="text-sm text-gray-400">Your trusted doorstep car wash partner.</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/cleancruisers.in?igsh=MTNtbnI1bWl0ZWoyYQ==" className="text-gray-400 hover:text-green-400"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1EUVLn1QoN/" className="text-gray-400 hover:text-green-400"><FaFacebookF /></a>
            <a href="https://wa.me/918920230357" className="text-gray-400 hover:text-green-400"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Pages</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
            <li><a href="/booking" className="text-gray-400 hover:text-white text-sm">Book a Wash</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Services</h4>
          <ul className="space-y-2">
            <li><a href="/booking?service=one-time" className="text-gray-400 hover:text-white text-sm">Daily Premium Car Wash</a></li>
            <li><a href="/booking?service=monthly" className="text-gray-400 hover:text-white text-sm">Premium Doorstep Car Wash</a></li>
            <li><a href="/booking?service=premium-addons" className="text-gray-400 hover:text-white text-sm">Interior Detailing</a></li>
            <li><a href="/booking?service=waterless" className="text-gray-400 hover:text-white text-sm">Exterior Polishing</a></li>
            <li><a href="/monthly-pricing" className="text-gray-400 hover:text-white text-sm">Monthly Plans</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Plot No. 66, Upper Ground Floor A-Block,</li>
            <li>Bhagwati Garden Road, Uttam Nagar</li>
            <li>New Delhi - 110059, India</li>
            <li>📞 +91 89202 30357</li>
            <li>📧 cleancruisers.in@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2025 CleanCruisers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
