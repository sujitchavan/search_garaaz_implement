import React, { useEffect, useState } from "react";
const data = require("./data/Data.json");

const Search = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, []);

  return (
    <div>
      {user.map((val) => {
        return <div>{val.name}</div>;
      })}
    </div>
  );
};

export default Search;
