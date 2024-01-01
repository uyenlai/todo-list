export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <h1 className="header">New Item</h1>
          <input type="text" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 className="header">To do list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Do laundry
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Clean the house
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
