import React from "react";

const Associates = (props) => {
  return (
    <>
      <ul>
        {props.arr.map((val) => {
          <li> {val} </li>
        })}
      </ul>
    </>
  );
};

export default Associates;
