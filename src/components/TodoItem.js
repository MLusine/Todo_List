import { useState } from "react";
import "./styles.css";

const TodoItem = ({ todos, setTodos }) => {
  const [data, setData] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex != null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = data;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, data]);
    }
    setData("");
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => index != i));
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setData(todos[index]);
  };
  return (
    <div className="wrapper">
      <h1>Todos</h1>
      <div>
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-button">
          {editIndex != null ? "Update" : "Add"}
        </button>
      </div>
      <ol className="todo-list">
        {todos.map((todo, ind) => (
          <li key={ind}>
            <div className="todo-content">
              {todo}
              <div className="actions">
                <button onClick={() => handleEdit(ind)} className="edit-btn">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ind)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default TodoItem;
