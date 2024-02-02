import React from "react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[60px] flex items-center w-full bg-slate-300">
      <ul className="flex items-center justify-center w-full px-5 h-full  m-0">
        <li
          onClick={() => navigate("?details=pressure")}
          className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer hover:font-medium   shadow-2xl"
        >
          pressure
        </li>
        <li
          onClick={() => navigate("?details=Medicine")}
          className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer hover:font-medium   shadow-2xl"
        >
          Medicine
        </li>
        <li
          onClick={() => navigate("?details=Blood")}
          className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer hover:font-medium   shadow-2xl"
        >
          Blood
        </li>
        <li
          onClick={() => navigate("?details=Bloodpressure")}
          className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer hover:font-medium   shadow-2xl"
        >
          Blood pressure
        </li>
        <li
         onClick={() => navigate("?details=pressure")}
        className="py-2 px-3 rounded-2xl bg-white  mx-3 cursor-pointer hover:font-medium  shadow-2xl">
          pressure
        </li>
        <li 
            onClick={() => navigate("?details=pressure")}
        className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer  hover:font-medium  shadow-2xl">
          pressure
        </li>
        <li className="py-2 px-3 rounded-2xl bg-white mx-3 cursor-pointer  hover:font-medium  shadow-2xl">
          pressure
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
