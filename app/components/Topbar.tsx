import { ChevronDown } from "lucide-react";
import React from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] py-[10px] sm:py-[14px]">
      <div className="max-w-screen-xl mx-auto container flex flex-col sm:flex-row items-center justify-between w-full px-4">
        {/* Left Section */}
        <p className="text-white flex items-center space-x-2 text-center sm:text-left text-[10px] sm:text-[12px]">
          <FaCheck className="text-white" />
          <span>Free shipping on all orders over $50</span>
        </p>

        {/* Right Section */}
        <ul className="mt-2 sm:mt-0 flex items-center space-x-4 text-white text-[10px] sm:text-[12px]">
          <li className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown />
          </li>
          <li className="cursor-pointer">FAQs</li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FaExclamationCircle className="text-white" />
            <span>Need Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
