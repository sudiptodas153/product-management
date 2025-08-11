import React from 'react'

export default function FAQSection() {
  const faqs = [
    {
      question: "Can I try the product management tool before purchasing?",
      answer:
        "Yes! We offer a 14-day free trial so you can explore all the features without any risk.",
    },
    {
      question: "Is my data secure on your platform?",
      answer:
        "Absolutely. We use industry-standard encryption and security protocols to protect your data.",
    },
    {
      question: "Can I upgrade or downgrade my subscription plan anytime?",
      answer:
        "Yes, you can change your subscription plan anytime from your dashboard without any hassle.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our dedicated support team is available 24/7 to help you with any issues or questions.",
    },
    {
      question: "Is there a limit on how many products I can manage?",
      answer:
        "That depends on your subscription plan. Basic plan has limits, while Pro and Enterprise offer unlimited product management.",
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto p-5 rounded-2xl bg-gray-50" id="faq">
      <h2 className="text-2xl md:text-4xl text-center mb-10 font-bold">Frequently Asked Questions</h2>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-900 font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
