export default class CreateDOMElements {

    createElement(name,props){

       let newElement = document.createElement(name);
       Object.keys(props).forEach( key => {
        newElement[key] = props[key];
       });
       return newElement;
     
    }

    append(parentElement,childElement){
        parentElement = typeof(parentElement) === 'string' ? document.querySelector(parentElement) : parentElement;
        parentElement.appendChild(childElement);
    }
}