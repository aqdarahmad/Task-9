import './greeting.css'

export default function Greeting({name}){
    return (
        <div className="greeting-container">
            <h4>Hello {name}</h4>
        </div>


    );
}