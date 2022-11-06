import React from "react";

import KBS1 from "../assets/images/KBS1.png";
import KBS2 from "../assets/images/KBS2.png";
import MBC from "../assets/images/MBC.png";
import SBS from "../assets/images/SBS.png";

const ChannelLogo = (props) => {
  const { channel } = props;

  const getLogo = (channel) => {
    switch (channel) {
      case "KBS1":
        return KBS1;
      case "KBS2":
        return KBS2;
      case "MBC":
        return MBC;
      case "SBS":
        return SBS;
      default:
        return "KBS1";
    }
  };

  return (
    <div>
      <img src={getLogo(channel)} alt="logo" width="48" height="auto" />
    </div>
  );
};

export default ChannelLogo;
