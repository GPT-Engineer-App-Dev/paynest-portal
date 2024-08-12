import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">SwiftPay</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
    </header>
  );
};

export default Header;