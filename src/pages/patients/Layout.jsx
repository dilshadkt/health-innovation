import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";

import SideNav from "./SideNav";
import ResultDisplay from "./ResultDisplay";
const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="flex ">
        <div className="flex-initial w-[25%]">
          <SideBar />
        </div>
        <div className="flex-1">
          <nav>
            <SideNav />
          </nav>
          <ResultDisplay />
        </div>
      </div>
    </div>
  );
};

export default Layout;
