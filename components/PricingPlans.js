import React from "react";

const PricingPlans = () => {
  const plans = [
    { name: "Basic", price: "$9.99/month" },
    { name: "Pro", price: "$19.99/month" },
    { name: "Enterprise", price: "$49.99/month" },
  ];

  return (
    <section id="pricing" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center max-w-5xl">
        <h3 className="text-3xl font-bold mb-8">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-2xl font-semibold mb-2">{plan.name}</h4>
              <p className="text-xl mb-4">{plan.price}</p>
              <button className="bg-blue-500 text-white py-2 px-6 rounded">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
