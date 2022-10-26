import React from "react";
import RatingListItem from "../components/RatingListItem";

const ratings = [
  {
    rank: 1,
    channel: "MBC",
    program: "Program name 1",
    rating: 10.1,
  },
  {
    rank: 2,
    channel: "MBC",
    program: "Program name 2",
    rating: 10.1,
  },
  {
    rank: 3,
    channel: "MBC",
    program: "Program name 3",
    rating: 10.1,
  },
  {
    rank: 4,
    channel: "MBC",
    program: "Program name 4",
    rating: 10.1,
  },
  {
    rank: 5,
    channel: "MBC",
    program: "Program name 5",
    rating: 10.1,
  },
  {
    rank: 6,
    channel: "MBC",
    program: "Program name 6",
    rating: 10.1,
  },
  {
    rank: 7,
    channel: "MBC",
    program: "Program name 7",
    rating: 10.1,
  },
  {
    rank: 8,
    channel: "MBC",
    program: "Program name 8",
    rating: 10.1,
  },
  {
    rank: 9,
    channel: "MBC",
    program: "Program name 9",
    rating: 10.1,
  },
  {
    rank: 10,
    channel: "MBC",
    program: "Program name 10",
    rating: 10.1,
  },
];

const RatingList = () => {
  return (
    <div>
      {ratings.map((item) => {
        return <RatingListItem item={item} />;
      })}
    </div>
  );
};

export default RatingList;
