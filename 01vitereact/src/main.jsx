// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import App from './App.jsx'
// // import  Chai from './chai.jsx'
// function App() {   //  WE ARE DOING THIS TO TAKE MORE DETAIL SO WHAT App do ,
//                    //  so App is just like a function  
//   return (
//      <h1> hello world |Ayush using App() </h1>
//   )
// }

// createRoot(document.getElementById('root')).render(     
//      //  we can send only one but (<></>) within wraping in some thing we can send many component 
// //    <>  <App />  
// //      {/* <Chai /> */}
// // </>
//     // App()
//         <App/>
// )
//  see how can we use custom reactelement making with respect to react 
//  in customreact we had made reactelement by your own way but here if we use it then it not work bcz react has it own way 


import React,  { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'

const userayush = "ayush singh"
const reactElement = React.createElement(
         'a',
         { href:'https://google.com',target:'_blank'},
         'Click me to visit Google  ',
         userayush  // to see evaluated expression 
)
 const anotherElement = (
    <a  href= "https://google.com" target='_blank'>visit google </a>
 )
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    // <App/>
)

