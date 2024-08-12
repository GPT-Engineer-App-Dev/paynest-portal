import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">SwiftPay</h3>
          <p className="text-gray-400">Simplifying payments for businesses worldwide.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 SwiftPay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;