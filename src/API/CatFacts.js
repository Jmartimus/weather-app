import React, { useState, useEffect } from "react";

const CatFacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="request-container">
      {data.map((x) => (
        <p>breed={x.CatFacts}</p>
      ))}
    </div>
  );
};

export default CatFacts;
