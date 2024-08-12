import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center bg-white shadow-sm">
      <div className="text-2xl font-bold text-gray-800">SwiftPay</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
        <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</a>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex text-gray-800 border-gray-300 hover:bg-gray-100">Sign In</Button>
    </header>
  );
};

export default Header;