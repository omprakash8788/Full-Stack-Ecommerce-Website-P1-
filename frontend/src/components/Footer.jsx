import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            aspernatur eaque vitae omnis atque ipsum voluptates nulla ratione
            consequatur expedita.
          </p>
        </div>
        {/* div */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* div */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91- 8776655544</li>
            <li>career@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* div */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ PartliputraMart.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
