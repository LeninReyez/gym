import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Contact(props) {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { listData } = useSelector((state) => state.contactListReducer);

  useEffect(() => {
    //console.log("INSIDE USE-EFFECT");
    //console.log(listData);
  });

  const handleData = () => {
    console.log("I was clicked");
    console.log(listData);
    // getDataAction();
  };

  // const getDataAction = () => {
  //   console.log("FETCH ACTION DISPATCHED");
  //   dispatch({ type: "FETCH" });
  // };

  return (
    <div>
      <h1>Contact List</h1>
      <button onClick={handleData}>Get Data</button>
      {data}
    </div>
  );
}

export default Contact;
