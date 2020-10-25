import React, { useState, useEffect } from "react";

function About(props) {
  const [data, setData] = useState();

  const getProps = () => {
    setData(props.counterData);
  };

  useEffect(() => {
    getProps();
  });

  return (
    <div>
      <h1>About Number {data}</h1>
      <button onClick={props.handleIncrementClick}>+</button>
      <br />
      <button onClick={props.handleDecrementClick}>-</button>
    </div>
  );
}

export default About;
