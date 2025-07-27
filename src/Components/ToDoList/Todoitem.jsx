import './todolist.css'
export default function Todoitem({text}){
    
    return(
        <li className="todo-item">{text}</li>

    );
}