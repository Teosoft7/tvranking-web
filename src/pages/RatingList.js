import React from "react";
import RatingListItem from "../components/RatingListItem";

const RatingList = (props) => {
  const { ratings } = props;

  return (
    <div>
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
