import axios from "axios";
import React, { useEffect, useState } from "react";

const Football = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://rapidapi.p.rapidapi.com/v2/players/team/443",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "841f109cb9msh2e9cbd101e7f5fep1b2973jsn48a399561569"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return <ul></ul>;
};

export default Football;
