import React from "react";

export default function HowItWork() {
  const features = [
    {
      title: "Easy Product Management",
      description: "Add, edit, and organize your products effortlessly.",
      icon: "🛠️",
    },
    {
      title: "Real-time Inventory Tracking",
      description: "Keep track of your stock levels in real-time.",
      icon: "📦",
    },
    {
      title: "Powerful Analytics",
      description: "Get insights on sales, trends, and customer behavior.",
      icon: "📊",
    },
    {
      title: "Multi-User Collaboration",
      description: "Work seamlessly with your team on product updates.",
      icon: "👥",
    },
    {
      title: "Secure Data Storage",
      description: "Your data is safe with industry-standard encryption.",
      icon: "🔒",
    },
    {
      title: "Mobile Friendly",
      description: "Manage your products anytime, anywhere from any device.",
      icon: "📱",
    },
  ];

  return (
    <section
      className="max-w-11/12 mx-auto bg-white"
      id="features"
    >
      <h2 className="text-2xl md:text-4xl text-center mb-10 font-bold">Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4 text-3xl">
              <span className="mr-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
