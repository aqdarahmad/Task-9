import Greeting from "./Components/Greeting/Greeting";
import Buttonc from "./Components/Button/Buttonc";
import Cardc from "./Components/Card/Cardc";
import Post from "./Components/Post/Post";
import postsData from './data/posts.json';


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

<Cardc 
  title="Flight Booking App" 
  description="Easily search and book your flights online." 
/>

      <div>
  {postsData.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ))}
</div>

      
    </div>
  );
}