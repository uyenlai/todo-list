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
    <div className="min-h-screen bg-slate-700 flex items-center justify-center">
      <main className="min-w-96 w-2/4 p-4 h-3/4 text-light-white">
        {showForm && (
          <button
            onClick={toggleShowForm}
            className="mb-4 outline-none border border-solid border-light-blue  text-light-blue py-1 px-2 rounded cursor-pointer bg-light-black hover:bg-[#00aaff33] focus:bg-[#00aaff33] text-xl"
          >
            Add a new todo
          </button>
        )}
        {!showForm && (
          <AddTodoForm handleSubmit={handleSubmit} onCancel={handleCancel} />
        )}
        <h1 className="text-2xl font-black mt-6 mb-2">To do list</h1>
        {todoList.length === 0 && <p className="text-lg">There is no to-do.</p>}
        {todoList.length > 0 && (
          <DisplayTodoList todoList={todoList} handleDelete={handleDelete} />
        )}
        <div className="flex items-center ml-1 h-8 mt-10">
          <p className="text-base p-4 border-l-8 border-emerald-400 h-4 flex items-center">
            Done
          </p>
          <p className="text-base p-4 border-l-8 border-red-600 h-4 flex items-center">
            Not started
          </p>
          <p className="text-base p-4 border-l-8 border-yellow-400 h-4 flex items-center">
            In progress
          </p>
        </div>
      </main>
    </div>
  );
}
