import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md ${isPopular ? 'border-2 border-blue-500' : ''}`}>
    {isPopular && <div className="text-blue-500 font-semibold mb-4">Most Popular</div>}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-500">/mo</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="text-green-500 mr-2" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={isPopular ? "default" : "outline"}>Choose Plan</Button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: 29,
      features: ["100 transactions/month", "Basic analytics", "24/7 support"],
      isPopular: false
    },
    {
      title: "Pro",
      price: 79,
      features: ["Unlimited transactions", "Advanced analytics", "Priority support", "Custom integrations"],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: 199,
      features: ["Unlimited transactions", "Advanced analytics", "Dedicated account manager", "Custom solutions"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;