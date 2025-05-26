function customRender(reactElement,container){
//     // we  will create DOM element  form reactelement 
//   version 1: 
//   const domElement = document.createElement(reactElement.type)
//   domElement.innerHTML = reactElement.children   
//    //   this take time as if we have more then 10 attribute then we need to same thing that much time ( setAttribute )
//   domElement.setAttribute('href', reactElement.props.href)
//   domElement.setAttribute('target', reactElement.props.target)
//   // we will append it to container 
//   container.appendChild(domElement)

// version 2:
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])    // setAttribue(key, value)
   } 
   container.appendChild(domElement)   // appenChild -> 'c' capital 


}

const reactElement ={
    type:  'a',
    props :{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}
const maincontainer = document.getElementById('root')
customRender(reactElement,maincontainer)  // WE ARE making this method to inject reactelement into main container 
                                          //  so using  making customrender(kya inject krna h ! , kha pe krna h ); 
                                          // now we don't know how this function work so making function see top function .
