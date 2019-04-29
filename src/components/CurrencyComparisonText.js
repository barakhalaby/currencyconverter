import React from 'react';
import '../css/CurrencyConverter.css';


class CurrencyComparisonText extends React.Component {

  displayConversion(){
    console.log(this.props.state)
    const { xchange, reverse, baseRate, leftTable, rightTable } = this.props.state; 
        // myCurrency is currency I have
     // converted is currency I want
     // convertingRate is the converted currency rate
     //myCurrencyRate 
    // usage:  convertCurrency(myCurrencyRate,convertingRate,myCurrency)
   
    //const xchange = convertCurrency(leftTable.rate,rightTable.rate,baseRate);
    //const reverse = reverseRate(baseRate,xchange);
  
    const conversion = this.props.name === 'leftTable' 
    ? `${baseRate} ${leftTable.currency} = ${xchange} ${rightTable.currency}`
    : `${baseRate} ${rightTable.currency} = ${reverse} ${leftTable.currency}`;
    return conversion
  }
  
 

  render(){
  
  const styles = 'CurrencyConverter_';
  
   return (
      <div className = {`${styles}compare`}>
       {
         this.displayConversion()
       }
      </div>
      )
  }
};

export default CurrencyComparisonText;
