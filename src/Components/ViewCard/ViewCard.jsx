import React from "react";
import "../ViewCard/mainViewCard.scss";
import { Link } from "react-router-dom";
export const ViewCard = ({ viewImg, viewName,customClass}) => {
  return (
    <>
      <Link className={`women-card-link ${customClass}`}>
        <div className="women-card">
          <div className="card-img">
            <img src={viewImg} alt="" />
          </div>
          <p className="view-par">{viewName}</p>
        </div>
      </Link>
    </>
  );
};
