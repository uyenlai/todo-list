export default function DisplayTodoList({ todoList, handleDelete }) {
  return (
    <>
      <ul className="list">
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.deadline}</p>
              <p>{item.status}</p>
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
    </>
  );
}
