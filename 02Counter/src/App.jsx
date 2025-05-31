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
   
    if(counter<20){ 
     
      // setcounter(counter + 1)     // interview question multiple setcounter now what will be the value on click?
      // setcounter(counter + 1)    //  as we know in react it send in bundle and these update are same so send only once; 
      // setcounter(counter + 1)   // answer is : i/p : 15  ->  o/p : 16
      // setcounter(counter + 1)   
     // if we want update in  this way then what we do is counter is like a function if we say add 1 in prevcointer the it work
     setcounter(prevcounter => prevcounter + 1 )
     setcounter(prevcounter => prevcounter + 1 )
     setcounter(prevcounter => prevcounter + 1 )
     setcounter(prevcounter => prevcounter + 1 )
      
    }
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
