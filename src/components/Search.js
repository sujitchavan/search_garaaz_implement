import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserCard from "./UserCard";
import "./Search.css";

const data = require("./data/Data.json");

const Search = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

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
      event.target.value.length > 0
        ? dispatch({
            type: "ADD_USER_DATA",
            payload: show,
          })
        : dispatch({
            type: "RESET_USER_DATA",
          });
    }, 500);
  };

  return (
    <div className="container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search User by ID, Address, ..."
          onChange={handleChange}
          id="searchbar"
        />
        <div className="user-box">
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Search;
