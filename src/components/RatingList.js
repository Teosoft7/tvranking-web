import React from "react";
import RatingListHeader from "../components/RatingListHeader";
import RatingListItem from "../components/RatingListItem";
import Divider from "@mui/material/Divider";

const RatingList = (props) => {
  const { ratings } = props;

  return (
    <div className="grid">
      <RatingListHeader />
      <Divider />
      {ratings ? (
        ratings.map((item, index) => {
          return <RatingListItem key={index} item={item} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default RatingList;
