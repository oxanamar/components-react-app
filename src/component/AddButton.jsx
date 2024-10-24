import React from "react";

export default function AddButton() {
  const handleClick = (e) => {
    console.log("hello", e.target);
  };

  const handleClick1 = (name, e) => {
    console.log("hello" + name, e.target);
  };

  return (
    <button
      onClick={(e) => {
        handleClick1("Maria", e);
      }}
    >
      Add
    </button>
  );
}
