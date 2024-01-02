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
    <form className="flex flex-col gap-2" onSubmit={(e) => onSubmit(e)}>
      <h1 className="text-2xl font-black mt-6 mb-2">Add new todo</h1>
      <div className="flex flex-col gap-[0.1rem]">
        <label className="text-lg">Title</label>
        <input
          className="outline-none border border-solid border-light-blue bg-[#006699] rounded py-1 px-2 text-light-white focus:border focus:border-solid focus:border-[#66ccff]"
          type="text"
          value={enteredValue.title}
          onChange={(e) => handleValueChange(e, "title")}
          required
        />
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <label className="text-lg">Deadline</label>
        <input
          className="outline-none border border-solid border-light-blue bg-[#006699] rounded py-1 px-2 text-light-white focus:border focus:border-solid focus:border-[#66ccff]"
          type="date"
          value={enteredValue.deadline}
          onChange={(e) => handleValueChange(e, "deadline")}
          required
        />
      </div>

      <div className="flex flex-col gap-[0.1rem]">
        <label className="text-lg">Status</label>
        <select
          className="outline-none border border-solid border-light-blue bg-[#006699] rounded py-1 px-2 text-light-white focus:border focus:border-solid focus:border-[#66ccff]"
          value={enteredValue.status}
          onChange={(e) => handleValueChange(e, "status")}
        >
          <option value="done">Done</option>
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
        </select>
      </div>

      <button
        className="outline-none border border-solid border-light-blue  text-light-blue py-1 px-2 rounded cursor-pointer bg-light-black hover:bg-[#00aaff33] focus:bg-[#00aaff33]"
        type="submit"
      >
        Add
      </button>

      <button
        className="outline-none border border-solid border-light-blue text-light-blue py-1 px-2 rounded cursor-pointer bg-light-black hover:bg-[#00aaff33] focus:bg-[#00aaff33]"
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </button>
    </form>
  );
}
