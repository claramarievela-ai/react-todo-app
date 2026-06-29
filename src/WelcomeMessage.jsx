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
