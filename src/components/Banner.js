import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <h3>{props.bannerHeading}</h3>
      <p>{props.bannerContent}</p>
    </div>
  );
}

export default Banner;
