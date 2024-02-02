import React from "react";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import AddIcon from "@mui/icons-material/Add";
import LandPage from "./LandPage";
const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <div className="fixed w-8 h-8 rounded-full p-5 flex z-30 hover:bg-gray-300 items-center justify-center bg-gray-200 bottom-[12px] cursor-pointer left-0 right-0 m-auto">
        <AddIcon />
      </div>
      <LandPage />
    </>
  );
};

export default Home;
