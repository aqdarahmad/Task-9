
import './parentnchild.css'
export default function Child({oncolorselector}){
    return (
        <div className="color-buttons">
            <button onClick={()=>oncolorselector("Black")}>Black</button>
            <button onClick={()=>oncolorselector("white")}>White</button>
            <button onClick={()=>oncolorselector("blue")}>Blue</button>
        </div>
    );
}