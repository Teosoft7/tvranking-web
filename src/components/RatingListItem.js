import React from "react";
import { useNavigate } from "react-router-dom";
import ChannelLogo from "./ChannelLogo";

const RatingListItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer grid grid-rows-2 grid-flow-col grid-cols-12 gap-2 h-14 items-center bg-white hover:bg-slate-300"
      onClick={() => {
        console.log("List Item Clieck");
        // need to pass channel, programme
        navigate("/weekly_chart", { state: { item: item } });
      }}
    >
      <div className="row-span-2 col-span-2 text-md text-black font-semibold text-center">
        {item.rank}
      </div>
      <div className="row-span-2 col-span-8 content-start align-middle">
        <div className="row-span-1">
          <ChannelLogo channel={item.channel} />
        </div>
        <div className="row-span-2">{item.programme}</div>
      </div>
      <div className="row-span-2 col-span-2 text-md text-black font-semibold text-center">
        {item.rating}%
      </div>
    </div>
  );
};

export default RatingListItem;
