function Todo(props) {
  function deleteHandler() {
    console.log("Clicked!", props.text)
  }
  return (
    <div className="card">
      {/* It's not HTML, its className and not class */}
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
