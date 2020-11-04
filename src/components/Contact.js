import React, { useEffect, useState } from "react";

function Contact(props) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(props.listData);
  });

  return (
    <div>
      <h1>Contact List</h1>
      {data}
    </div>
  );
}

export default Contact;
