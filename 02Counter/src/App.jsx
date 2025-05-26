import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
   let [counter, setcounter] = useState(15) // userstate is a hook which is responsible to change state 
                                            //  this require array[_what_,_method_]
  // let counter = 5;
  const addvalue = () => {   // this function use to update counter value on click from console
                             //  we see( inspect web console ) onclick value upadate but not show in UI here come react main use 
                            // react provide HOOKS via which we can update UI in multiple position 
   
    if(counter<20){ counter = counter + 1   
     setcounter(counter) }
    //  console.log("clicked", counter); 
  }
  const removevalue =() => {
    if(counter > 0 ) setcounter(counter - 1)

  } 
  return (
   <>
   <h1> PROJECT COUNTER </h1>
  <h2>counter value is: {counter }</h2>

   <button onClick={addvalue}
   >Add value: {counter}</button>
   <br />
   <button
    onClick={removevalue}>Remove value : {counter}</button>
   <p>Footer: {counter}</p>
   </>
  )
}

export default App
