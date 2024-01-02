import { useState } from "react";
import DisplayTodoList from "./components/displayTodoList";
import AddTodoForm from "./components/addTodoForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e, enteredValue) {
    e.preventDefault();
    const newTodo = {
      title: enteredValue.title,
      //deadline: formattedDate,
      deadline: enteredValue.deadline,
      status: enteredValue.status,
      id: Math.random() * 1000,
    };

    setTodoList((prevState) => {
      return [...prevState, newTodo];
    });
  }

  function handleDelete(id) {
    setTodoList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  function handleCancel() {
    setShowForm((prevState) => !prevState);
    setTodoList((prevState) => {
      return [...prevState];
    });
  }

  function toggleShowForm() {
    setShowForm((prevState) => !prevState);
  }

  return (
    <>
      {showForm && (
        <button onClick={toggleShowForm} className="btn">
          Add a new todo
        </button>
      )}
      {!showForm && (
        <AddTodoForm handleSubmit={handleSubmit} onCancel={handleCancel} />
      )}
      <h1 className="header">To do list</h1>
      {todoList.length === 0 && <p>There is no to-do.</p>}
      {todoList.length > 0 && (
        <DisplayTodoList todoList={todoList} handleDelete={handleDelete} />
      )}
    </>
  );
}
