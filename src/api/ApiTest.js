import React, { useEffect, useState } from "react";
import axios from "axios";

const apiCall = async () => {
  try {
    const payload = await fetch("https://jsonplaceholder.typicode.com/users");
    return await payload.json();
    // console.log(results);
  } catch (err) {
    console.log(`error found of type ${err}`);
  }
};

// export const resolvePromise = async () => {
//   const data = await apiCall();
//   console.log(data);
//   return data;
// };

export default apiCall;

// Set the initial state as an empty array where you can store your response:
// instead of this:
// const [data, setData] = useState({ name: [] }); do this: const [data, setData] = useState([]); that should work
// return (
//   <ul>
//     {data.map((item) => (
//       <li key={item.id}>
//         <a>{item.name}</a>
//       </li>
//     ))}
//   </ul>
// );
