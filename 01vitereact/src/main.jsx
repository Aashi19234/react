import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// we can create a function here itself and call it
 /*function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
 }*/
 /*const Reactelement ={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'

  },
  children:'Click me to visit google'
}*/

const anotherelement=(
  <a href="httpe://google.com" target='_blank'> Visit Google</a>
)

const anotheruser="chai aur react"

// element creation from React as per the import
const reactelement=React.createElement(
  // enter a tag as first parameter
  'a',
  // second parameter exepected is object which is same as setattribute
  {href: 'https://google.com', target:'_blank'},
  // direct text as third parameter
  'click me to visit google',
  // after entire tree is made then we can inject variables
anotheruser


)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactelement
  
)

//  if we call reactelement here in reactdom render then it will not work because the parameters of this object is not as per the render which
// react created , it is as per the custom render which we created thats why it will not work

// anotherelement will work because it contains a normal a tag

