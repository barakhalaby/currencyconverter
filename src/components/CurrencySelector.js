import React from 'react';
import '../css/CurrencyConverter.css';
import CreateDOMElements from '../classes/CreateDOMElements';


class CurrencySelector extends React.Component {

state = this.props.state;

componentDidMount() {
    this.renderSelect();
    if(this.props.name ==='rightTable'){
       //this.select.selectedIndex = this.select.length-1;
    }
  }

handleOnChange(event){
    const currency = event.target[event.target.selectedIndex].text;
    const rate = event.target[event.target.selectedIndex].value;
    console.log(this);
    
    let obj = {
        currency: currency,
        rate: rate,
    }
    obj[this.props.name] = {
        currency: currency,
        rate: rate,
        selectedIndex: event.target.selectedIndex
    }
    
    this.props.updateState(obj)
} 
renderSelect()
{
    
    const dom = new CreateDOMElements();
    const select = dom.createElement('select',{
            id: 'currencySelect',
            onchange: this.handleOnChange.bind(this)     
    });
    this.select = select;
   
    this.props.currencyList.forEach( prop => {
      
        let option = dom.createElement('option',{value:prop['_rate'],text:prop['_currency']});
        dom.append(select,option)
        }); 

    dom.append(this._reactInternalFiber.child.stateNode,select);

}
   updateList(){
    const { selectedIndex } = this.props.state; 
    console.log(selectedIndex);
   } 

  render(){
    const styles = 'CurrencyConverter_';
   
   return (
      <div className = {`${styles}flexItem ${styles}table_wrapper`}> 
        {this.updateList()}
      </div>
   )};
}
export default CurrencySelector;
