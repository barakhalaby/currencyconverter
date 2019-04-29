import loadXML from './loadXML'

export default class buildCurrencyList {
    constructor(){
        this.URL = 'eurofxref-daily.xml'
        // failed to retreive because of cors policy created local copy
        // const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
    } 

    load (callback) {
        
         loadXML(this.URL,callback);
     }
}