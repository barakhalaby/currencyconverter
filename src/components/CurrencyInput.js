import React from 'react';

class CurrencyInput extends React.Component {

    inputUpdated(event){
        console.log('updated input');
    }
    
    render() {
 
    const styles = 'CurrencyConverter_';

    return (
        <div className = {`${styles}input`}>
            <input type= 'text' onchange='inputUpdated' />
        </div>
        )
    }
};

export default CurrencyInput;
