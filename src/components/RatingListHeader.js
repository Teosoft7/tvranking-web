import React from "react";

const RatingListHeader = () => {
  return (
    <div className="container ">
      <div className="grid grid-rows-1 grid-cols-12 grid-flow-col gap-1 items-center h-8">
        <div className="col-span-2 text-md text-black font-semibold text-center">
          <h4>Rank</h4>
        </div>
        <div className="col-span-8 text-md text-black font-semibold text-left">
          <h4>Programme</h4>
        </div>
        <div className="col-span-2 text-md text-black font-semibold text-center">
          <h4>Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default RatingListHeader;
