import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Simplify Your Payments with SwiftPay</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Fast, secure, and seamless transactions for businesses of all sizes. Join thousands of satisfied customers today.
      </p>
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
    </section>
  );
};

export default Hero;