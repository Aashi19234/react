import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,// because amount change krenge toh reusult alg ana chahie toh state m changes hnge
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",// by default jo currency show hgi
    amountdisable=false,
    currencydisable=false,
    className = "",
}) {
   // hamne ese {} class islie di and backticks mei dia hai kyuki agr user ko kuch apni css daalni ho toh


    return (
        <div className={`bg-white p-3
         rounded-lg text-sm flex ${className}`}>
        
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencydisable}

                >
                    
                        {currencyOption.map((currency)=>(
                            <option key ={currency} value="{currency}">
                                usd
                            </option>
                        ) )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


/* explaination of onchange code


onChange={(e) => ...}: This part is saying, "When the content of the input field changes, do something."

onAmountChange && ...: This part checks if there's a function called onAmountChange available. If it exists, it proceeds to the next step.

onAmountChange(Number(e.target.value)): If onAmountChange exists, this part calls that function. It sends the new value of the input field (after converting it into a number) as a parameter to the onAmountChange function.

So, in simple terms, when someone types in the input field, this code checks if there's a function called onAmountChange. If there is, it calls that function and sends the new value of the input field to it as a number. If there's no onAmountChange function, it does nothing. This setup allows for handling input changes flexibly, depending on whether a function for handling them is provided or not.











*/
