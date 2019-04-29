import React from 'react';
import CurrencyTable from './CurrencyTable';
import '../css/CurrencyConverter.css';
import convertImage from '../images/convert.png'
import BuildCurrencyList from '../classes/BuildCurrencyList';
import {convertCurrency, reverseRate } from '../classes/currencyConversions';

class CurrencyConverter extends React.Component {

  constructor(props){
   super(props);
   this.init = false;
   this.createState = this.createState.bind(this);
   this.state = {
    leftTable : {currency:'EUR',rate:1, value:0},
    rightTable : {currency:'EUR',rate:1, value:0},
    baseCurrency : 'EUR',
    baseRate: 1,  
    }
  this.currencyList = new BuildCurrencyList().load(this.createState);
  }

  createState(currencyList){
    
    const stateObj = {
      leftTable : {currency: currencyList[0]._currency,rate: currencyList[0]._rate, value:0},
      rightTable : {currency: currencyList[currencyList.length-1]._currency,rate: currencyList[currencyList.length-1]._rate,value:0}
    }
    const updatedRates = this.updateRates(stateObj);
    console.log("updatedRates", updatedRates)
    this.currencyList = currencyList
    this.init = true;
    this.setState(updatedRates);    
  }

updateState(updated_state){
 
  this.setState(updated_state);
  updated_state = this.updateRates(this.state);
  this.setState(updated_state);
} 

updateRates(updated_state){
  const baseRate = this.state.baseRate || updated_state.baseRate ;
  
  updated_state.xchange = convertCurrency(updated_state.leftTable.rate,updated_state.rightTable.rate,baseRate);
  updated_state.reverse = reverseRate(baseRate,updated_state.xchange);
  return updated_state
}

  render(){
   const styles = 'CurrencyConverter_';
   
   const content = (
   
    <div className = {`${styles}flexContainer`}>
     <CurrencyTable name = 'leftTable' currencyList = {this.currencyList} updateState = {this.updateState.bind(this)} state = {this.state} />
       <img alt='' src={convertImage} className = {`${styles}convertImg`}></img>
       <CurrencyTable  name = 'rightTable' currencyList = {this.currencyList} updateState = {this.updateState.bind(this)} state = {this.state} />
     </div>
   )
   let show = this.init ? content : null;
  
    return (
      <div className = {`${styles}root`}>
        <div className = {`${styles}heading`}>
          Currency Converter
        </div>
            {show};  
       
      </div>
      )
  }
}

export default CurrencyConverter;
