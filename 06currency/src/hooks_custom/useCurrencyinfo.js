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
}, [currency])// we are using useEffect hook to fetch api because we want to call this hook
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
