import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-xl font-semibold">{title}</h4>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="py-4">{content}</p>}
    </div>
  );
};

export default Accordion;
