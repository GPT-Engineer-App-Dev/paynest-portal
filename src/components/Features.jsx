import React from 'react';
import { CreditCard, Lock, Zap, Globe } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <CreditCard size={32} />,
      title: "Multiple Payment Options",
      description: "Accept credit cards, bank transfers, and digital wallets with ease."
    },
    {
      icon: <Lock size={32} />,
      title: "Bank-Grade Security",
      description: "Your transactions are protected with state-of-the-art encryption."
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning-Fast Transactions",
      description: "Process payments in seconds, not days."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      description: "Accept payments from customers worldwide in multiple currencies."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose SwiftPay?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;