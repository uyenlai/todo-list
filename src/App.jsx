import { useState } from "react";

export default function App() {
  const [enteredValue, setEnteredValue] = useState({
    title: "",
    deadline: "",
    status: "done",
  });
  const [todoList, setTodoList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const formattedDate = new Date(enteredValue.deadline).toLocaleDateString(
    navigator.language,
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  function handleSubmit(e) {
    e.preventDefault();

    setTodoList((prevState) => {
      return [
        ...prevState,
        {
          title: enteredValue.title,
          deadline: formattedDate,
          status: enteredValue.status,
          id: Math.random() * 1000,
        },
      ];
    });
    setEnteredValue({
      title: "",
      deadline: "",
      status: "done",
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

  function handleCancel() {
    setTodoList((prevState) => {
      return [...prevState];
    });
    setEnteredValue({
      title: "",
      deadline: "",
      status: "done",
    });
    setShowForm((prevState) => !prevState);
  }

  function toggleShowForm() {
    setShowForm((prevState) => !prevState);
  }

  return (
    <>
      {!showForm && (
        <button onClick={toggleShowForm} className="btn">
          Add a new todo
        </button>
      )}
      {showForm && (
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
          <div className="form-row">
            <label>Status</label>
            <select
              value={enteredValue.status}
              onChange={(e) => handleValueChange(e, "status")}
            >
              <option value="done">Done</option>
              <option value="not-started">Not started</option>
              <option value="in-progress">In progress</option>
            </select>
          </div>
          <button className="btn" type="submit">
            Add
          </button>
          <button className="btn" onClick={handleCancel} type="button">
            Cancel
          </button>
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
