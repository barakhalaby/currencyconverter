import forex from '../data/eurofxref-daily';

export default class buildCurrencyList {
    constructor(){
        const currencyList = forex.Envelope.Cube.Cube.Cube;
        currencyList.push({_currency:'EUR',_rate:'1'});
        return currencyList;
    }    
}