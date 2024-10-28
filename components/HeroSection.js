import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Product</h2>
        <p className="mb-8">Experience the best solution tailored for you.</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
