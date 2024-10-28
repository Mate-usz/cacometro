import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  description,
  buttonText,
  imageSrc,
  reverse = false,
}) => {
  return (
    <section className="container mx-auto py-16 px-4 max-w-7xl">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center`}
      >
        {/* Colonna Testo */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-6">{description}</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded">
            {buttonText}
          </button>
        </div>
        {/* Colonna Immagine */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={imageSrc}
            alt="Product"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
