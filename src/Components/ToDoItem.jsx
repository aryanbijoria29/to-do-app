import React from "react";

function ToDoItem(props) {
  return (
    <div className="container">
      <div className="row item-row ">
        <div className="col-6">{props.toDoName}</div>
        <div className="col-4">{props.toDoDate}</div>
        <div className="col-2">
          <button
            onClick={() => props.onDeleteItem(props.toDoName)}
            type="button"
            class="btn btn-danger item-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
