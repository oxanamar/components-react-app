import { useState } from "react";

function ListItem({ id, name, color, deleteItem }) {
  const [checked, setChecked] = useState(false);

  const handleCheckedState = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ color: color }}>
      <input type="checkbox" onChange={handleCheckedState}></input>
      <label style={{ textDecoration: checked ? "line-through" : "none" }}>
        {name}
      </label>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ListItem;
