import React from 'react';
import CurrencyTable from './CurrencyTable';
import '../css/CurrencyConverter.css';
import convertImage from '../images/convert.png'
import BuildCurrencyList from '../classes/BuildCurrencyList';
import {convertCurrency, reverseRate } from '../classes/currencyConversions';

class CurrencyConverter extends React.Component {

  constructor(props){
   super(props);
  this.createState = this.createState.bind(this);
  }

  createState(){
    this.state = {
      leftTable : {currency:this.currencyList[0]._currency,rate:this.currencyList[0]._rate, value:0},
      rightTable : {currency:this.currencyList[this.currencyList.length-1]._currency,rate: this.currencyList[this.currencyList.length-1]._rate,value:0},
      baseCurrency : 'EUR',
      baseRate: 1,  
    }
    const updatedRates = this.updateRates(this.state);
    console.log("updatedRates", updatedRates)
     Object.assign(this.state,updatedRates);

  }

  init (){
    this.currencyList = new BuildCurrencyList();
    
  }
  /*
  state = {
    leftTable : {currency:'USD',rate:0, value:0},
    rightTable : {currency:'EUR',rate:0,value:0},
    baseCurrency : 'EUR',
    baseRate: 1
  }  
  */

updateState(updated_state){
 
  this.setState(updated_state);
  updated_state = this.updateRates(this.state);
  this.setState(updated_state);
 // CurrencyComparisonText.updateState(state);
} 

updateRates(updated_state){
  const baseRate = this.state.baseRate || updated_state.baseRate ;
  
  updated_state.xchange = convertCurrency(updated_state.leftTable.rate,updated_state.rightTable.rate,baseRate);
  updated_state.reverse = reverseRate(baseRate,updated_state.xchange);
  return updated_state
}
  render(){
   const styles = 'CurrencyConverter_';
    return (
      <div className = {`${styles}root`}>
        <div className = {`${styles}heading`}>
          Currency Converter
        </div>
        
        <div className = {`${styles}flexContainer`}>
         
          <CurrencyTable name = 'leftTable' currencyList = {this.currencyList} updateState = {this.updateState.bind(this)} state = {this.state} />
          <img alt='' src={convertImage} className = {`${styles}convertImg`}></img>
          <CurrencyTable  name = 'rightTable' currencyList = {this.currencyList} updateState = {this.updateState.bind(this)} state = {this.state} />
    
        </div>
      </div>
      )
  }
};

export default CurrencyConverter;
