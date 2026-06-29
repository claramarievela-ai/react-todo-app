import TodoItem from "./TodoItem";

function TodoList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
