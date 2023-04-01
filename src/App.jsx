import Form from "./components/Form/Form";
import ToDoList from "./components/TodoList/TodoList";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <h1 className="Heading">ToDo App</h1>
      <div>
        <Form
          toDo={toDo}
          setToDo={setToDo}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </div>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
};

export default App;
