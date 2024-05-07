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

// createRoot: it creates a DOM like strcuture behind the scene like browser. It does this because it compares main dom and its dom and update those things which are being updated in UI.
// Browser deletes the whole DOM and repaints the whole DOM which means page reloading.
// repaint means web structure is getting ready again.
// Virtual dom: we can trace whole dom in a tree like structure and the values which are being changed in dom can be replaced in tree.
// main dom and virtual dom ->
// The main DOM in React JS, or the Document Object Model, is a programming interface for HTML and XML documents. 
//It represents the page structure and allows programs to manipulate the document's content, structure, and styles.
//In React, the Virtual DOM is an exact copy of the browser DOM, but in memory. React components are inserted as children to the virtual DOM.
// The virtual DOM is the reason React renders so quickly and efficiently.