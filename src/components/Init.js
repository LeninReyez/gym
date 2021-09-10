import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Init(props) {
  const dispatch = useDispatch();
  console.log("FETCH ACTION DISPATCHED From INIT FILE");
  dispatch({ type: "FETCH" });
}

export default Init;
