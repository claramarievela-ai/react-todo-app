import { useState } from "react";

function TodoItem({ id, text, completed, onDelete }) {
  const [done, setDone] = useState(completed);

  return (
    <li>
      <span onClick={() => setDone(!done)}>
        {done ? "✅" : "⬜"} {text}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
