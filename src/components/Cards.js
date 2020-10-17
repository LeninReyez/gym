import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="card-parent">
      <Card cardHeading="Beginner" content="Enter Content" />
      <Card cardHeading="Intermediate" content="Enter Content" />
      <Card cardHeading="Advanced" content="Enter Contentt" />
    </div>
  );
}

export default Cards;
