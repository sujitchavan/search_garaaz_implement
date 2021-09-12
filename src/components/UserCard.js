import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Search.css";

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

const UserCard = () => {
  const userData = useSelector((state) => state.userData);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (userData.length && downPress) {
      setCursor((prevState) =>
        prevState < userData.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);

  useEffect(() => {
    if (userData.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    if (userData.length && hovered) {
      setCursor(userData.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div>
      {userData.length > 0 ? (
        userData.map((val, index) => {
          return (
            <li
              key={index}
              className={`${index === cursor ? "active" : ""}`}
              onMouseEnter={() => setHovered(val)}
              onMouseLeave={() => setHovered(undefined)}
            >
              <div>{val.id}</div>
              <div>{val.name}</div>
              <div>{val.items.join(", ")}</div>
              <div>{val.address}</div>
              <div>{val.pincode}</div>
            </li>
          );
        })
      ) : (
        <li className="txt-center">No User Found</li>
      )}
    </div>
  );
};

export default UserCard;
