import React, { Fragment } from "react";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
