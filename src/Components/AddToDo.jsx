import React, { useState } from "react";

function AddToDo( {onNewItem}) {
   
  const [itemName, setItemName] = useState();
  const [itemDate, setItemDate]  = useState();

  const handleNameChange = (event)=>{
    setItemName(event.target.value);
  }

  const handleDateChange = (event)=>{
    setItemDate(event.target.value);
  }

  const handleOnClick = () =>{
    onNewItem(itemName, itemDate);
    setItemName("");
    setItemDate("");
  }
  
  return (
    <div className="container text-center ">
      <div className="row item-row ">
        <div className="col-6">
          <input onChange={handleNameChange} value={itemName} type="text" placeholder="Enter your task" />
        </div>
        <div className="col-4">
          <input onChange={handleDateChange} value={itemDate} type="date" />
        </div>
        <div className="col-2">
          <button onClick={handleOnClick} type="button" class="btn btn-success item-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
