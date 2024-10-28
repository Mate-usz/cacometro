import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Product</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
