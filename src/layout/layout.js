import React from "react";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <div className="contents">
      <MainNavigation />
      <div className=" py-2 px-2 lg:px-0">{props.children}</div>
    </div>
  );
};

export default Layout;
