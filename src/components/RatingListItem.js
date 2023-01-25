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
      <div className="row-span-2 col-span-7 content-start align-middle">
        <div className="row-span-1">
          <ChannelLogo channel={item.channel} />
        </div>
        <div className="row-span-2">{item.programme}</div>
      </div>
      <div className="row-span-2 col-span-3 p-6">
        <div className="flex items-center">
          <span className="mr-2 text-md text-black font-semibold text-center">
            {item.rating}%
          </span>
          <div className="relative w-full">
            <div className="overflow-hidden h-3 text-xs flex rounded bg-purple-200">
              <div
                style={{ width: item.rating * 2 + "%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingListItem;
