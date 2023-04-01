import moment from "moment/moment";
import "./ToDoList.css";

const ToDoList = ({ toDoList, setToDoList }) => {
  function handleDelete(index) {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList);
  }
  return (
    <div className="ToDoContainer">
      {toDoList.length !== 0 ? (
        <h1 className="ToDoHeading">ToDo List</h1>
      ) : (
        <h1>What's The ToDo's Today?</h1>
      )}
      <ul>
        {toDoList.map((toDo, index) => (
          <div className="li">
            <li key={index}>
              {toDo.length > 22 ? (
                <i className="i">{toDo.slice(0, 22)}..</i>
              ) : (
                <i className="i">{toDo}</i>
              )}
              <i>Created at {moment().calendar()}</i>
            </li>
            <button className="ToDoBtn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
