import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Simplify Your Payments with SwiftPay</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Fast, secure, and seamless transactions for businesses of all sizes. Join thousands of satisfied customers today.
      </p>
      <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white">Get Started</Button>
    </section>
  );
};

export default Hero;