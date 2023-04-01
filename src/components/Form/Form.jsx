import "./Form.css";

const Form = ({ toDo, setToDo, toDoList, setToDoList }) => {
  function handleChange(e) {
    setToDo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (toDo !== "") {
      setToDoList([...toDoList, toDo]);
    } else {
      alert("Enter a Task ToDo خال!");
      return;
    }
    setToDo("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Task.."
        value={toDo}
        onChange={handleChange}
        autoFocus
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
