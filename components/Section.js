import React from "react";

const Section = ({ title, children, twoColumns = false }) => {
  return (
    <section className="container mx-auto py-16">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-3xl font-bold mb-8">{title}</h3>
        {twoColumns ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {children}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl">{children}</div>
        )}
      </div>
    </section>
  );
};

export default Section;
