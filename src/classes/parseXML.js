parseXML(){
    //const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
    const URL = 'http://localhost:90/eurofxref-daily.xml'
    let header = new Headers({
        'Access-Control-Allow-Origin':'',
        'Content-Type': 'multipart/form-data'
        });
   // let request = new Request(URL);
    let request = new Request(URL);
    fetch(request,{
        mode: 'cors',
        method: 'POST',
        headers: header,
        body:null 
    }).then((result) =>{
        result
        .text()
        .then((str) =>{
            console.log(str);
        });
        console.log(result)
    });
  }