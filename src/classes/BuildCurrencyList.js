//import forex from '../data/eurofxref-daily';
import loadXML from './loadXML'
// failed to retreive becuse of cors policy created local copy
// const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';


export default class buildCurrencyList {
    constructor(){
        this.URL = 'eurofxref-daily.xml'
        //const currencyList = forex.Envelope.Cube.Cube.Cube;
        
    } 

    load () {
        
            let currencyList = loadXML(URL);
            currencyList.push({_currency:'EUR',_rate:'1'});
            return currencyList;
          
          }
    }
    
    
}