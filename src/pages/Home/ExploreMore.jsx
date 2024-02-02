import React from "react";
import { motion } from "framer-motion";
import exploremore from "../assets/exploremore.png";
import { fadeIn } from "../../variant";
import { useNavigate } from "react-router-dom";
const ExploreMore = () => {
  const navigate = useNavigate();
  const NavigatToDash = () => {
    const type = localStorage.getItem("user");
    navigate(`/${type}`);
  };
  return (
    <div className="flex h-screen w-full bg-gradient-to-r bg-blue-200">
      <motion.div
        variants={fadeIn("left", 0.3)}
        viewport={{ once: false, amount: 0.3 }}
        initial="hidden"
        whileInView={"show"}
        className="flex-1 flex items-center justify-center"
      >
        <div className="w-[70%]">
          {" "}
          <h1 className="font-bold h1">
            Revolutionizing Healthcare Data Management: A Secure and
            Interoperable Solution for the Future
          </h1>
          <p>
            {" "}
            Explore our cutting-edge web-based platform, a game-changer in
            healthcare data management. Harnessing advanced encryption and
            blockchain technology, we ensure the utmost security and privacy for
            sensitive health data.{" "}
          </p>
          <button
            onClick={() => NavigatToDash()}
            className="py-3 px-4 hover:bg-blue-500 animate-pulse bg-blue-400 text-white rounded-2xl"
          >
            Explore More
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        viewport={{ once: false, amount: 0.3 }}
        initial="hidden"
        whileInView={"show"}
        className="flex-1 flex items-end"
      >
        <div>
          <img
            src={exploremore}
            alt=""
            //   className="h-full w-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreMore;
