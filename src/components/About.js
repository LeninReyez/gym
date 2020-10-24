import React, { useState, useEffect } from "react";

function About(props) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(props.counterData);
    setNumber(props.counterData);
  }, []);

  return (
    <div>
      <h1>About Number {number}</h1>
      <button>Click me!</button>
    </div>
  );
}

export default About;
