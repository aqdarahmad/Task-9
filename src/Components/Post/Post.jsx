import { useState } from "react";
import './post.css'

export default function Post({ title, body }) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className='post'>
      <h3 className="title">{title}</h3>
      <p className="body">{body}</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}
