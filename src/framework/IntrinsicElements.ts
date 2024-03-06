import Component from "./Component";
import { HtmlElementProps } from "./Koact";

export type IntrinsicElementName = 'h1' | 'h2' | 'button' | 'input';

export default class IntrinsicElements{    

    private props: HtmlElementProps;
    private element: HTMLElement;

    constructor (elementName: IntrinsicElementName, props: HtmlElementProps) {           
        const element = document.createElement(elementName);
        this.props = props;
        this.element = element;
        this.setProps();        
    }

    setProps() {
        this.element.innerHTML = this.props.value;
        this.element.addEventListener("click", this.props.onclick);
    }

    get htmlElement() {
        return this.element;
    }
}