import React from 'react';
import CurrencyTable from './components/CurrencyTable';
import './css/CurrencyConverter.css';
import convertImage from './images/convert.png'
import BuildCurrencyList from './classes/BuildCurrencyList';

class CurrencyConverter extends React.Component {

  constructor(props){
   super(props);
    this.currencyList = new BuildCurrencyList();
  }
  
  state = {
    leftTable : {currency:'USD',rate:0},
    rightTable : {currency:'EUR',rate:0},
    baseCurrency : 'EUR',
    currency:'USD',
    baseRate: 1,
    rate: 0
}  

updateState(updated_state){
  this.setState(updated_state);
 // CurrencyComparisonText.updateState(state);
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
