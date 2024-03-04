import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  // let counter= 15

  let [counter,setcounter] = useState(15)
 
   let addValue = function() {
    
    if (counter<20) {
    counter = counter +1
    console.log("clicked", counter);
    setcounter(counter)
    }
    
  }

  let removeValue = () =>{
   

    if (counter>0) {
      counter = counter-1
      console.log("removed", counter);
      setcounter(counter) 
    }
  }

  return (
    <>
      <h1>hello React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
