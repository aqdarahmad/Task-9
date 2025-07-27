import { useState } from "react";
import Child from "./Child";


export default function Parent() {
  const [color, setColor] = useState("red");

  return (
    <div className="parent-container">
      <h2 className="selected-text">Selected color: {color}</h2>

      <div
        className="color-display"
        style={{ backgroundColor: color }}
      />

      <Child oncolorselector={setColor} />
    </div>
  );
}
