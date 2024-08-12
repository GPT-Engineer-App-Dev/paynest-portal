import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({ quote, author, role, avatar }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="flex items-center">
      <Avatar className="h-10 w-10 mr-4">
        <AvatarImage src={avatar} alt={author} />
        <AvatarFallback>{author[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SwiftPay has revolutionized our payment process. It's fast, reliable, and our customers love it!",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The security features of SwiftPay give us peace of mind. It's a game-changer for our online business.",
      author: "Michael Chen",
      role: "CTO, E-commerce Solutions",
      avatar: "https://i.pravatar.cc/150?img=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;