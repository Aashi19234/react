import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks_custom/useCurrencyinfo'


function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)// bcoz changes toh from se hnge toh vo dedia default m

  const options = Object.keys(currencyInfo)
  // usecurrrencyinfo hmara data return krra hai jo hmara object type ka h and usme key:value pair hai
  // toh hme uss object se saari keys chahie bcoz hme user ko options dene hai toh hmne iss method se saari keys nikal li.

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

 const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
 }// variable m islie rkha kyuki button pr click krke call hga y


 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cQlG6a6CgmanUQVFhL5UstAyzy5XNE8p4el9DV1dkw&s')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();// jb form submit hta h tb vo kahi jata h by default, toh use prevent krne k lie
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOption={options}
                          onCurrencyChange={(currency)=> setAmount(amount)}
                          selectCurrency={from}
                          onAmountChange={(amount)=> setAmount(amount)}

                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                         
                          amount={convertedAmount}
                          currencyOption={options}
                         onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={from}
                          amountdisable

                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
