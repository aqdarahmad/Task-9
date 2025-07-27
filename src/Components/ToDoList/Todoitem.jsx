import './todolist.css';

export default function Todoitem({ text, onDelete }) {
  return (
    <li className="todo-item">
      {text}
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  );
}
