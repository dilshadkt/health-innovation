import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between h-[70px] p-5 shadow-2xl">
      <div>
        
      </div>
      <div className="flex">
        <div className="px-3 hover:bg-gray-200 cursor-pointer hover:text-white rounded-xl py-2">
          Home
        </div>
        <div className="px-3 hover:bg-gray-200 cursor-pointer hover:text-white rounded-xl py-2">
          Blog
        </div>
        <div className="px-3 hover:bg-gray-200 cursor-pointer hover:text-white rounded-xl py-2">
          Article
        </div>
      </div>
    </div>
  );
};

export default Navbar;
