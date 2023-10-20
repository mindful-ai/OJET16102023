/* import { h } from "preact";

import { CurrencyInput } from "./currencyInput/index";
import { useState, useEffect } from "preact/hooks";
//import axios from "axios";

/* Keep the name in Hungarian Notation 
export function DashboardContent(){

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rates, setRates] = useState([]);

    function format(number) {
        return number.toFixed(4);
      }
    
      function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
      }
    
      function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
      }
    
      function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
      }
    
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
      }

    return(
        <div style="margin: 5%; padding: 5%">
            <h1>Dashboard Content Area</h1>
            <div style="height:100px"></div>
            <div>
                <h1>Currency Converter</h1>
                <CurrencyInput
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1} />
                <CurrencyInput
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2} />
            </div>
        </div>
    )
}

*/