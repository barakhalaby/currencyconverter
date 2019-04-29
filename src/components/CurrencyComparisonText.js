import React from 'react';
import '../css/CurrencyConverter.css';
import { convertCurrency, reverseRate } from '../classes/currencyConversions';


class CurrencyComparisonText extends React.Component {

  displayConversion(){
    const { baseRate, leftTable, rightTable } = this.props.state; 
    console.log(this.props.state);
     // myCurrency is currency I have
     // converted is currency I want
     // convertingRate is the converted currency rate
     //myCurrencyRate 
    // usage:  convertCurrency(myCurrencyRate,convertingRate,myCurrency)
   
    const xchange = convertCurrency(leftTable.rate,rightTable.rate,baseRate);
    const reverse = reverseRate(baseRate,xchange);
    const conversion = this.props.name === 'leftTable' 
    ? `${baseRate} ${leftTable.currency} = ${xchange} ${rightTable.currency}`
    : `${baseRate} ${rightTable.currency} = ${reverse} ${leftTable.currency}`;
    return conversion
  }
  

  render(){
 console.log(this.props.name);
  
  const styles = 'CurrencyConverter_';
  

   return (
      <div className = {`${styles}compare`}>
       {this.displayConversion()}
       {/*
         `${baseRate} ${currency} = ${euroRate} ${baseCurrency}`
       */}
      </div>
      )
  }
};

export default CurrencyComparisonText;
