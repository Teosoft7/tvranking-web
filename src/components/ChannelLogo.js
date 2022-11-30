import React from "react";

import KBS1 from "../assets/images/KBS1.png";
import KBS2 from "../assets/images/KBS2.png";
import MBC from "../assets/images/MBC.png";
import SBS from "../assets/images/SBS.png";

import JTBC from "../assets/images/JTBC.png";
import TVCHOSUN from "../assets/images/TVCHOSUN.png";
import CHANNELA from "../assets/images/CHANNELA.png";
import MBN from "../assets/images/MBN.png";

import TVN from "../assets/images/TVN.png";
import TVNSTORY from "../assets/images/TVNSTORY.png";
import MNET from "../assets/images/MNET.png";
import YTN from "../assets/images/YTN.png";
import JTBC2 from "../assets/images/JTBC2.png";
import YONHAP from "../assets/images/YONHAP.png";
import SBSPLUS from "../assets/images/SBSPLUS.png";
import SBSSPORTS from "../assets/images/SBSSPORTS.png";
import MBCEVERY1 from "../assets/images/MBCEVERY1.png";
import MBCSPORTSPLUS from "../assets/images/MBCSPORTS.png";
import ENA from "../assets/images/ENA.png";
import KBSNSPORTS from "../assets/images/KBSNSPORTS.png";
import KBSJOY from "../assets/images/KBSJOY.png";
import KBSDRAMA from "../assets/images/KBSDRAMA.png";
import SPOTV from "../assets/images/SPOTV.png";
import SPOTV2 from "../assets/images/SPOTV2.png";

const ChannelLogo = (props) => {
  const { channel } = props;

  const getLogo = (channel) => {
    switch (channel) {
      // 지상파
      case "KBS1":
        return KBS1;
      case "KBS2":
        return KBS2;
      case "MBC":
        return MBC;
      case "SBS":
        return SBS;

      // 종합편성
      case "JTBC":
        return JTBC;
      case "TV CHOSUN":
        return TVCHOSUN;
      case "채널A":
        return CHANNELA;
      case "MBN":
        return MBN;

      // 케이블
      case "tvN":
        return TVN;
      case "tvN STORY":
        return TVNSTORY;
      case "Mnet":
        return MNET;
      case "YTN":
        return YTN;
      case "연합뉴스TV":
        return YONHAP;
      case "JTBC2":
        return JTBC2;
      case "SBS Plus":
        return SBSPLUS;
      case "SBS Sports":
        return SBSSPORTS;
      case "MBC every1":
        return MBCEVERY1;
      case "MBC SPORTS+":
        return MBCSPORTSPLUS;
      case "ENA":
        return ENA;
      case "KBSN스포츠":
        return KBSNSPORTS;
      case "KBS JOY":
        return KBSJOY;
      case "KBS드라마":
        return KBSDRAMA;
      case "SPOTV":
        return SPOTV;
      case "SPOTV2":
        return SPOTV2;

      default:
        console.log("NO IMAGE: ", channel);
        return "no-logo";
    }
  };

  return (
    <div>
      <img src={getLogo(channel)} alt="logo" width="48" height="auto" />
    </div>
  );
};

export default ChannelLogo;
