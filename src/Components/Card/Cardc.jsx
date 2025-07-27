import './card.css'
export default function Cardc({title , description}){
    return(
         <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    );

}