import React from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <div>
      {userData.length > 0 ? (
        userData.map((val, index) => {
          return (
            <div key={index}>
              <div>{val.id}</div>
              <div>{val.name}</div>
              <div>{val.items.join(", ")}</div>
              <div>{val.address}</div>
              <div>{val.pincode}</div>
            </div>
          );
        })
      ) : (
        <div>No User Found</div>
      )}
    </div>
  );
};

export default UserCard;
