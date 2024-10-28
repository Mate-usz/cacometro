"use client";
import React, { useState } from "react";

const FAQ = ({ questions, twoColumns = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto py-16 px-4">
      {twoColumns ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonna FAQ Info */}
          <div className="text-center md:text-left">
            <p className="text-sm uppercase text-gray-500">FAQ</p>
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Colonna Domande */}
          <div>
            {questions.map((question, index) => (
              <div key={index} className="border-b">
                <button
                  className="w-full flex justify-between items-center py-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <h4 className="text-xl font-semibold">{question.question}</h4>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="py-4">{question.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          {questions.map((question, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full flex justify-between items-center py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className="text-xl font-semibold">{question.question}</h4>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && <p className="py-4">{question.answer}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FAQ;
