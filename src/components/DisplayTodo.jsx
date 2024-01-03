export default function DisplayTodo({ todoList, handleDelete }) {
  return (
    <>
      <ul className="ml-1 p-0 list-none flex flex-col gap-1.5">
        {todoList.map((item) => {
          let classStatus =
            "flex items-center justify-between p-2 mb-3 bg-slate-500";
          if (item.status === "done") {
            classStatus += " border-l-emerald-400 border-l-8";
          } else if (item.status === "in-progress") {
            classStatus += " border-l-yellow-400 border-l-8";
          } else if (item.status === "not-started") {
            classStatus += " border-l-red-600 border-l-8";
          }

          return (
            <li className={classStatus} key={item.id}>
              <div className="flex flex-col">
                <p className="text-base p-1">{item.title}</p>
                <p className="text-base p-1">Deadline: {item.deadline}</p>
              </div>
              <button
                className="bg-slate-100 text-[#cc0000] outline-none border border-solid border-[#cc0000] py-1 px-2 rounded cursor-pointer hover:bg-red-400 focus:bg-red-400"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
