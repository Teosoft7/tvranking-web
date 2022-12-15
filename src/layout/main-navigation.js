import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./logo";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const MainNavigation = (props) => {
  const navigate = useNavigate();

  return (
    <header className="bg-violet-700 sticky h-14 top-0 z-50 shadow-md">
      <div className="container flex h-full items-center justify-between px-2 md:px-0">
        <div className="flex gap-1 text-3xl font-bold text-slate-100 px-2 md:px-1">
          <Logo />
        </div>
        <div
          className="cursor-pointer items-center gap-2 text-slate-100 px-2 md:px-1"
          onClick={() => {
            // show help pannel
            navigate("/about");
            console.log("Header Clicked");
          }}
        >
          <HelpOutlineIcon />
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
