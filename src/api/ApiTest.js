import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiTest = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");

      setData(result.data);
      console.log(typeof result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default ApiTest;

// Set the initial state as an empty array where you can store your response:
// instead of this:
// const [data, setData] = useState({ name: [] }); do this: const [data, setData] = useState([]); that should work
