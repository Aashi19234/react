import { useState, useCallback, useEffect, useRef } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLength]= useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed , setCharAllowed]= useState(false);
  const[copied,setcopied]=useState(false);
const [password,setpassword]= useState("")

//useRef hook
const passwordref= useRef(null)
const passwordgenerator=useCallback(()=>{
  let pass=""// generated password
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // data jisse password bnega
  if(numberAllowed){
    str+="0123456789"
  }
  if(charAllowed) str+="!@#$%^&*+-"
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)// iss hme index value mili h array ki random, character ni mila
    
    pass+=str.charAt(char) // string se char utha lia

  }
  setpassword(pass)
},[length,numberAllowed,charAllowed,setpassword])// setpassword daalne na daalne se frk ni pdega but ek function dena chahie jisse value set hri h kyuki usecallback hmara cachhe m rkhta h prev values, toh jo setpassword se values aaegi use bhi cache m rkhna cahie

const copyPasswordtoclipboard = useCallback(()=>{
  // use of variable passwordref? 
  // it will help us determine whether the object is selectable or not,accessible or not, to provide optimised result, current object kya h, coy effect dene k liee
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,100);// kitne chars select krane h vo idhr 3 chars tak select hga code, kuch bhi set kr skte 
  // react pr kaam krre h islie window le paare h copytoclipboard pr
  window.navigator.clipboard.writeText(password) // hover effect selected password pr
  setcopied(true);
  setTimeout(()=>{
    setcopied(false);
  },2000)// it will hide the message after 2 seconds
  
}, [password])// optimise krne k lie use krre h usecallback normal function bhi bna skte
useEffect(()=>{passwordgenerator()}, [length,numberAllowed,charAllowed,passwordgenerator])// first time jab page load hga tb y call hga and after that jb bhi kisi dependencies m changes hnge tb hga
// isme hmara jese hi changes dikhe password m toh firse run  krdo function ko
//passwordgenerator(); ese krenge toh code ek infinite loop m chla jaega due to too many renders.

// ham normally passworedgenerator ko call ni kr skte kyuki kab kaha kya  render hga vo ham control ni kr skte vo react control krega

// useCallback hook will be used in order to generate the passwordgenerator function after numbers,characters button is clicked
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// it will help to optimize the continous calling of a particular function.
// it stores the function in memory bcoz when we rerun it then the part which is similar to stored function can be used from that cache.
// syntax: useCallback(fn, dependencies) 
// dependencies: jiske change hne pr function run kre for example in our case  numbers and characters are dependencies kyuki unke change hne pr function run krra h
// dependencies will be passed as an array.
// read rest about useCallback from its documentation.


  return (
    <>
    <div className="flex justify-center items-start mt-24">
  <div className="w-full max-w-md shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
    <h1 className="text-white text-center my-3">Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden justify-center mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordref}

      />
      <button onClick={copyPasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'>{copied?'Copied': 'copy'}</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range'
        min={6}
        max={100}
        value={length}
        className='curson-pointer'
        onChange={(e)=>{setLength(e.target.value)}}// onChange={(e) => { setLength(e.target.value) }}: When the user moves the slider, 
        //this function updates the length variable with the new value selected on the slider. So, moving the slider changes the length variable.
        // setlength handles the length variable so thats why it is called


        
        />
        <label>Length :{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);

          }}
          
          />
          <label>Numbers</label>


        

      </div>
      <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);// agr directly true set krdenge toh html m toh true false hga but internally true hi rhega


          }}
          
          />
          <label>Characters</label>


        

      </div>



    </div>
  </div>
</div>

    


    </>

    // how to call function passwordgenerator->\
    // 1) using button and adding an onclick feature to it
    // 2) using hook: useEffect-> useEffect is a React Hook that lets you synchronize a component with an external system.
    // syntax: useEffect(setup, dependencies?)
  )
}
// how to copy password to clipboard?
// using hook : useRef-> useRef is a React Hook that lets you reference a value that’s not needed for rendering.
//syntax: const ref = useRef(initialValue)

export default App
