import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="container mx-auto my-4 grid grid-cols-4 gap-4 justify-between items-center">
      <div className="header-start flex items-center gap-2 col-span-3">
        <div className="bg-primary w-[40px] h-[40px] flex items-center justify-start rounded-full">
          <IoAirplaneSharp size={40} fill="white" className="-ml-1" />
        </div>
        <h1 className="font-bold text-2xl text-text">PLANE SCAPE</h1>
      </div>
      <div className="header-end flex gap-4 items-center col-span-1">
        <div className="flex gap-2 font-medium text-text cursor-pointer rounded-lg p-2 max-h-[100px] hover:bg-light">
          <MdDiscount className="fill-primary" size={20} />
          Deals
        </div>
        <div className="flex gap-2 font-medium text-text cursor-pointer rounded-lg p-2 max-h-[100px] hover:bg-light">
          <FaEarthAmericas className="fill-primary" size={20} />
          Discover
        </div>
        <div className="flex items-end text-text p-1 rounded-lg hover:bg-light max-h-[100px] cursor-pointer">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          John Doe
        </div>
      </div>
    </div>
  );
};

export default Header;
