import React, { useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  const[name, setName] = useState("ruthu");
  const[color, setColor] = useState("red");
    return (
    <div>
      <Greeting name ={name}/>
      <button onClick={() => setName("rahul")}>click for change</button>
      <h2>my fav color is {color}!</h2>
      <button onClick={() => setColor("black")}>reveal color</button>
    </div>
  )
}

