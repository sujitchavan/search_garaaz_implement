import React, { useEffect, useState } from "react";
const data = require("./data/Data.json");

const Search = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState([]);

  useEffect(() => {
    setUser(data);
  }, []);

  const handleChange = (event) => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      let show = user.filter((val) => {
        if (
          val.address
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          val.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          val.pincode
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          val.items
            .join(",")
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          val.id.includes(event.target.value)
        ) {
          return val;
        }
        return;
      });
      event.target.value.length > 0 ? setShow(show) : setShow([]);
    }, 500);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search User by ID, Address, ..."
        onChange={handleChange}
        id="searchbar"
      />
      {show &&
        show.map((val) => {
          return <div>{val.name}</div>;
        })}
    </div>
  );
};

export default Search;
