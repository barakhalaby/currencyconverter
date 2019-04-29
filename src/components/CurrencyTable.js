import React from 'react';
import CurrencyComparisonText from './CurrencyComparisonText';
import '../css/CurrencyConverter.css';
import CurrencySelector from './CurrencySelector';
import CurrencyInput from './CurrencyInput'


class CurrencyTable extends React.Component {
    

   /* componentDidMount() {
        this.props.updateState({
          rate : this.props.currencyList[0]._rate
        })
      }
    */

  render(){
   const styles = 'CurrencyConverter_';

   return (
      <div className = {`${styles}flexItem ${styles}table_wrapper`}>
         <CurrencyComparisonText name = {this.props.name} currencyList = {this.props.currencyList} updateState = {this.props.updateState} state = {this.props.state}/>
        <div className = {`${styles}table`}>
         <CurrencySelector name = {this.props.name} currencyList = {this.props.currencyList}  updateState = {this.props.updateState} state = {this.props.state}/>
         <CurrencyInput name = {this.props.name}  updateState = {this.props.updateState} state = {this.props.state} />
        </div>

      </div>
    )
  }
};

export default CurrencyTable;
