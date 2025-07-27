import'./buttonc.css'

export default function Buttonc({text , onClick}){
    return(
        <button className="custom-button" onClick={onClick}>{text}
          
        </button>
    );
}