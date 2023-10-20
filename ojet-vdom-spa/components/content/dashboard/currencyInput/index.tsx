import { h } from "preact";
//import * as PropTypes from "prop-types";

export function CurrencyInput(){

    return(
        <div>This is Dashboard Content. Just to Check</div>
    )

}
/*
type propTypes = {
    amount: string,
    currency: string,
    currencies: ['INR', 'USD'],
    onAmountChange: (event:any) => void,
    onCurrencyChange: (event:any) => void,
  };

export function CurrencyInput(props: propTypes){

    return(
        <div>
            <input type="text" value={props.amount} onChange={ev => props.onAmountChange((ev.target as HTMLInputElement).value)} />
            <select value={props.currency} onChange={ev => props.onCurrencyChange((ev.target as HTMLInputElement).value)}>
                {props.currencies.map((currency => (
                <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

*/