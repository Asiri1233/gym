"use client";
import React, { useState } from "react";
import Button from "./Button";
import { TiThMenu } from "react-icons/ti";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Community", href: "/" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-row items-center justify-between max-w-[1200px] mx-auto p-6">
        <div>
          <img src="Logo.png" alt="Logo" />
        </div>
        <div className="flex gap-4 items-center font-Poppins">
          {navLinks.map((item) => (
            <ul key={item.href} className="hidden md:flex">
              <a
                className="text-white hover:text-blue-400 duration-300 "
                href={item.href}
              >
                {item.label}
              </a>
            </ul>
          ))}
          <div className="flex items-center gap-3">
            <button className="text-white p-2 border border-white rounded-lg font-semibold font-Poppins">
              Login
            </button>
            <Button buttonLabel="Register" />
          </div>
          <div className="flex md:hidden">
            <TiThMenu color="white" onClick={toggle} />
          </div>
        </div>
      </div>
      {nav && (
        <div className="md:hidden text-center p-2 space-y-10">
          {navLinks.map((item) => (
            <ul key={item.href} className="block text-white">
              <a href={item.href}>{item.label}</a>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
