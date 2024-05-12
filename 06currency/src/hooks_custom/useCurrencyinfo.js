// How to create custom hook?
import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})// incase fetch call ni hri toh emtpy object hai toh crash ni hga

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
        latest/currencies/${currency}.json`)
    .then((res)=>res.json())// Api response ko json m convert krdia
    .then((res)=>setData(res[currency]))// object access krna h toh square bracket se lia, and currency islie lia bcoz m api m hm jo currency daaalre h like inr,usd key vahi h toh in dono m se jb bhi koi access krna ho toh currency
    //dono currency m jiska call aaega vo use ho jaega [currency daalke]
}, [currency])// we are using useEffect hook to fetch api because we want to call this api
    //when someone load or use this hook, so useEffect has this feature of invoking, when a component is mounted.
// directy ab hmara api call ho jaega
// Api se values string m aati h toh use handle krna pdega.

//The .then() method in JavaScript is defined in the Promise API. It is used to deal with asynchronous tasks, such as an API call. 
//The . then() method is called after a Promise is fulfilled (resolved) and it returns a new Promise that will resolve to the value returned by the callback function.
console.log(data);
return data
//the return data statement returns the fetched currency data. This data will be used by the component that calls this hook.
// Since this hook is asynchronous (due to the fetch operation), initially data will be an empty object, but it will be updated with the fetched data once the fetch operation completes and the component re-renders.

//So, return data is returning the currency data fetched from the API, which will be utilized by the component using this custom hook.
}

export default useCurrencyInfo;
// return krdia whole method and data ka access mil gya



// NOTES OF THIS PART

//1) What are custom hooks and what is their need?
/* In simpler words, Custom hooks in React are like building blocks for your code. They are functions you create to bundle up some common tasks or behaviors
 you find yourself doing often in your components.

 In technical words, In React, custom hooks are JavaScript 
 functions that allow you to extract and reuse logic across different components
 The need for custom hooks arises from the desire to pro
 promote code reuse, readability, and maintainability in React applications. 
 */

 /* Difference betweem normal js functions and react hooks?

 The only difference is that they have some rules and conventions imposed by React. These rules enable hooks to interact with React's internal state and lifecycle features.

Custom hooks are a type of function that you create to encapsulate reusable logic. They follow the naming convention of starting with the word "use" (e.g., useCustomHook). 
This naming convention tells React that the function is a hook and allows it to use React features within the function.
  */


/* Why did we use useeffect to fetch api and did not fetch it properly?

-> Separation of Concerns: With useEffect, you separate the data-fetching logic from the component rendering logic. This improves 
the readability and maintainability of your code because each part of your component focuses on a specific task.

Preventing Infinite Loops: When you fetch data directly in the component body, it can lead to infinite re-renders if not handled properly.
 By using useEffect with a dependency array (the second argument), you specify when the effect should run (e.g., only when certain dependencies change). This prevents unnecessary re-fetching and potential performance issues.

*/

/* Why is there not problem in fetching api directly in js

In traditional JavaScript applications, fetching data directly in the component body or within functions doesn't typically lead to
 infinite loops because JavaScript doesn't have the concept of reactivity or component lifecycle like React does.

*/