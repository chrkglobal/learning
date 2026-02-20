import React from "react";
import { tvData } from "../data/tv";
import { Link } from "react-router-dom";

const Tv = () => {
  const firstFiveImages = tvData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2>Tv</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/tv'>
              <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tv;
