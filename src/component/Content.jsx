import React, { useState } from "react";
import ListItem from "./ListItem";
import AddButton from "./AddButton";

function Content() {
  const [items, setItems] = useState([
    { id: 1, name: "Watch React tutorial", isChecked: false, color: "red" },
    { id: 2, name: "Watch Flask tutorial", isChecked: true, color: "green" },
    { id: 3, name: "Polish Zoo project", isChecked: false, color: "blue" },
  ]);

  // useEffect(() => {
  //   //getData
  // }, [items]);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(JSON.parse(localStorage.getItem("toDoList")));
  // }, []);

  const deleteItem = (id) => {
    console.log(`Deleting item with id: ${id}`);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("toDoList", JSON.stringify(updatedItems));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            color={item.color}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <AddButton />
    </main>
  );
}

export default Content;
