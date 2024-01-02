import { useState } from "react";

export default function AddTodoForm({ handleSubmit, onCancel }) {
  const [enteredValue, setEnteredValue] = useState({
    title: "",
    deadline: "",
    status: "done",
  });

  function handleValueChange(e, identifier) {
    setEnteredValue({
      ...enteredValue,
      [identifier]: e.target.value,
    });
  }

  function onSubmit(e) {
    handleSubmit(e, enteredValue);

    setEnteredValue({
      title: "",
      deadline: "",
      status: "done",
    });
  }

  function handleCancel() {
    onCancel();
    setEnteredValue({
      title: "",
      deadline: "",
      status: "done",
    });
  }

  return (
    <form className="new-item-form" onSubmit={(e) => onSubmit(e)}>
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
  );
}
