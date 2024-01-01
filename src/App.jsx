import { useState } from "react";

export default function App() {
  const [enteredValue, setEnteredValue] = useState({
    title: "",
    deadline: "",
    status: ["done", "not started", "in progress"],
  });
  const [todoList, setTodoList] = useState([]);
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          title: enteredValue.title,
          deadline: enteredValue.deadline,
          id: Math.random() * 1000,
        },
      ];
    });
    setEnteredValue({
      title: "",
      deadline: "",
      //status: ["done", "not started", "in progress"],
    });
  }

  function handleValueChange(e, identifier) {
    setEnteredValue({
      ...enteredValue,
      [identifier]: e.target.value,
    });
  }

  function handleDelete(id) {
    setTodoList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  function toggleShowForm() {
    setShowForm(false);
  }

  return (
    <>
      {showForm && (
        <button onClick={toggleShowForm} className="btn">
          Add a new todo
        </button>
      )}
      {!showForm && (
        <form className="new-item-form" onSubmit={handleSubmit}>
          <h1 className="header">Add new todo</h1>
          <div className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={enteredValue.title}
              onChange={(e) => handleValueChange(e, "title")}
              required
            />
          </div>

          <div className="form-row">
            <label>Deadline</label>
            <input
              type="date"
              value={enteredValue.deadline}
              onChange={(e) => handleValueChange(e, "deadline")}
              required
            />
          </div>
          <button className="btn">Add</button>
        </form>
      )}
      <h1 className="header">To do list</h1>
      {todoList.length === 0 && <p>There is no item.</p>}
      {todoList.length > 0 && (
        <ul className="list">
          {todoList.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.deadline}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
