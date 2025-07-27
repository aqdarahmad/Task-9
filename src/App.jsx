import Greeting from "./Components/Greeting/Greeting";
import Buttonc from "./Components/Button/Buttonc";
import Cardc from "./Components/Card/Cardc";
import Post from "./Components/Post/Post";
import postsData from './data/posts.json';
import Todolist from "./Components/ToDoList/Todolist";


export default function App(){
  function Hi(){
    alert("Hi");
  }
  return(
    <div >
    <Greeting name="Aqdar"/>
    <Buttonc text="click me" onClick={Hi}/>
    <Cardc 
  title="Weather App" 
  description="Check the current weather and forecast for your location." 
/>

      <div>
  {postsData.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ))}
</div>
<Todolist/>

      
    </div>
  );
}