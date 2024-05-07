"use client";
import { handleSmoothScroll } from "@/func";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="p-3 pb-3 lg:p-10 lg:pb-8 xl:p-10 xl:pb-8 md:p-5 ">
        <div className=" flex justify-between">
          <h1 className="font-semibold text-3xl md:text-2xl xl:text-3xl lg:text-3xl sm:text-sm ">
            GetJwel Sellers
          </h1>
          <div className=" flex gap-5">
            <button className=" bg-white border-none outline-none sm:text-xs transition duration-900 ease-in-out opacity-95 hover:opacity-100 hover:font-semibold ">
              <a href="#Why_Us" onClick={handleSmoothScroll}>
                Why Us?
              </a>
            </button>

            <button className="hover:bg-[#ede7c0] opacity-90 hover:opacity-100 font-semibold bg-[#EAE4C0] transition duration-300 shadow-md hover:shadow-lg pt-2 pb-2 pl-4 pr-4 sm:pt-0 sm:pb-0  sm:pl-[0.3rem] sm:pr-[0.3rem]  sm:text-[0.5rem]">
              Dashboard
            </button>
            <button className="hover:bg-[#ede7c0] opacity-90 hover:opacity-100 font-semibold bg-[#EAE4C0] transition duration-300 shadow-md hover:shadow-lg pt-2 pb-2 pl-4 pr-4 sm:pt-0 sm:pb-0  sm:pl-[0.3rem] sm:pr-[0.3rem]  sm:text-[0.5rem]">
              Become a Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
