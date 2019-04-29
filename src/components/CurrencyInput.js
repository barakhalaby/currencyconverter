import React from 'react';

class CurrencyInput extends React.Component {

    componentDidMount() {
        this.updateInput();
      }

    inputUpdated(event){
       // console.log('updated input',this.props.name,event.target.value);
        let obj =this.props.state;
        obj[this.props.name].value = parseFloat(event.target.value);
        this.props.updateState(obj);
    }

    updateInput(){
        let state = this.props.state;
        let name = this.props.name;
        
        let element = document.querySelector("#input_"+name);
        if(document.activeElement !== element){
         
           if(element){
                if(element.id === "input_leftTable"){
                   
                    if(element)element.value = (state.rightTable.value * state.xchange) || state.baseRate;
                }else{
                    console.log("this element is not active",state);
                   
                    if(element)element.value = (state.leftTable.value * state.reverse) || state.baseRate * state.reverse;
                }  
            }else{}
        }
        /*
        
        
        
        let update = this.props.name === 'leftTable'
        ? state[this.props.name].value
        : state.leftTable.value * state.reverse;
      
       // console.log(field,this.props.name, state[this.props.name].value,update);
        */
        //if(field)field.value = update;
    }
    render() {

    const styles = 'CurrencyConverter_';

    return (
        <div style={{display:'inline-flex',height:'50%'}}>
            <input id = {'input_'+this.props.name} className = {`${styles}input`} type= 'number' min='0' step='0.01' onChange={this.inputUpdated.bind(this)} />     
            {
                this.updateInput()
            }
        </div>
        )
    }
};

export default CurrencyInput;
