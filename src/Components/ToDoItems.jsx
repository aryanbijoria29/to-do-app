import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
const ToDoItems = ({ toDoItems, onDeleteItem }) => {
  return (
    <div className={styles.itemsContainer}>
      {toDoItems.map((item) => (
        <ToDoItem
          toDoName={item.name}
          toDoDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
