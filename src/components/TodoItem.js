import { useState } from "react";

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
    <div>
      <h2>Todos</h2>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleAdd}>
        {editIndex != null ? "Update" : "Add"}
      </button>
      <ol>
        {todos.map((todo, ind) => (
          <li key={ind}>
            {todo}

            <button onClick={() => handleDelete(ind)}>Delete</button>
            <button onClick={() => handleEdit(ind)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default TodoItem;
