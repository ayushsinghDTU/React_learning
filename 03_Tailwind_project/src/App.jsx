import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username : "ayush",
    age: 21
  }
  let arr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-2 rounded-xl'>Tailwind test </h1>

       <Card channel = "chai aur code" someobj = {myobj} newarr = {arr}/>  // pass in " " or {}
       <Card username ="chaiaurcode"/>
    </>
  )
}

export default App
