import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h3>{props.cardHeading}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
