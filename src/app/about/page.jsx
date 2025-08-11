import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image first on mobile, second on desktop */}
        <div className="relative w-full h-80 md:h-full order-1 md:order-2">
          <Image
            src="https://i.ibb.co.com/N6zMKW7m/product.webp"
            alt="About Our Store"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text second on mobile, first on desktop */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Store
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">Productify</span>, 
            your trusted online marketplace for high-quality products.  
            We make online shopping fast, easy, and secure — so you can find what 
            you need, when you need it.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether you're looking for the latest tech gadgets, stylish 
            accessories, or everyday essentials, we’ve got you covered with 
            competitive prices and quick delivery.
          </p>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">🛒 Easy & Secure Online Purchase</li>
            <li className="flex items-center gap-2">⚡ Fast Delivery Nationwide</li>
            <li className="flex items-center gap-2">💳 Multiple Payment Options</li>
            <li className="flex items-center gap-2">⭐ Trusted by Thousands of Customers</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
