import React from "react";
// import { HomePageExplore } from "../../../data/homepage-explore";
// import CourseCard from "./CourseCard";
import HighlightText from "../HomePage/highlightText";

// const tabsName = [
//   "Free",
//   "New to coding",
//   "Most popular",
//   "Skills paths",
//   "Career paths",
// ];

const ExploreMore = () => {
  

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </div>

      
      

      
    </div>
  );
};

export default ExploreMore;
