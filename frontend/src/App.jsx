import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import './App.css'

function App() {
  const [jokes,setJokes] = useState([])
  
useEffect(()=>{
  axios.get('/api/jokes')
  .then((Response)=>{
    setJokes(Response.data)
  })
  .catch((error)=>{
    console.log("Error", error);
  })
})
  
  return (
    <>
    <h1>my name</h1>
    <p>JOKES:{jokes.length}</p>

    {
      jokes.map((joke, index)=>(
        <div key={joke.type}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
