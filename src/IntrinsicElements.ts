import Component from "./Component";

export type IntrinsicElementName = 'h1' | 'h2' | 'button' | 'input';

export default class IntrinsicElement extends Component{

    constructor (elementName: IntrinsicElementName, value?: string) {
        const element = document.createElement(elementName);        
        if(value) element.innerHTML = value;
        super(element);
    }
}

