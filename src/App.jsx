import { useState } from "react";
import TodoList from "./TodoList";
import EmptyState from "./EmptyState";

function App() {
  const [tasks, setTasks] = useState([
    { id: "a", text: "Eat", completed: false },
    { id: "b", text: "Sleep", completed: false },
    { id: "c", text: "Code", completed: false },
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  if (tasks.length === 0) return <EmptyState />;

  return <TodoList tasks={tasks} onDelete={handleDelete} />;
}

export default App;

import { useState } from "react";

function TodoItem({ id, text, completed, onDelete }) {
  const [done, setDone] = useState(completed);

  return (
    <li>
      {done ? "✅" : "⬜"} {text}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function Card({ name, email, avatar }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} className="card-avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export { TodoItem, Card };
export default Card;
