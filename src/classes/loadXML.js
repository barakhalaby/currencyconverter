	
function loadXML(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var array = [];
	  var parser = new DOMParser();
	  let xmlDoc = parser.parseFromString(this.responseText, "text/xml");
	  let el = xmlDoc.getElementsByTagName("Cube")[0].childNodes[1].childNodes;
	 
	  el.forEach(key =>{
	  if(key.nodeName !== "#text") {
		let obj = {
		_currency: key.attributes.currency.value,
		_rate: key.attributes.rate.value
		}
		array.push(obj);	
	  };
	  
	  })
	  return array;
	   
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

export default loadXML
