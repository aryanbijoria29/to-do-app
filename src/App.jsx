import Header from "./Components/Header";
import AddToDo from "./Components/AddToDo";
import Container from "./Components/Container";
import ToDoItem from "./Components/ToDoItem";
import ToDoItems from "./Components/ToDoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import React, { useState } from "react";

function App() {
  // const initalToDoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "19/04/2024",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "20/04/2024",
  //   },
  //   {
  //     name: "Watch Movie",
  //     dueDate: "21/04/2024",
  //   },
  // ];

  const [toDoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDate}`);
    const newToDoItems = [...toDoItems, { name: itemName, dueDate: itemDate }];
    setToDoItems(newToDoItems);
  };

  const handleDeleteItem = (itemName) => {
    const newItems = toDoItems.filter((item) => item.name !== itemName);
    setToDoItems(newItems);
    console.log(`Deleted Item: ${itemName}`);
  };

  return (
    <center className="todo-container">
      <Container>
        <Header />
        {toDoItems.length === 0 && <WelcomeMessage toDoItems={toDoItems} />}
        <AddToDo onNewItem={handleNewItem} />
        <ToDoItems onDeleteItem={handleDeleteItem} toDoItems={toDoItems} />
      </Container>
    </center>
  );
}

export default App;
