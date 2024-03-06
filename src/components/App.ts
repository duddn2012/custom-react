import Component from "../framework/Component";
import IntrinsicElements from "../framework/IntrinsicElements";
import { KoactNode } from "../framework/Koact";

export class App extends Component{
    
    constructor() {                
        super();
    }

    render () {                
        const h1 = new IntrinsicElements('h1', {value: "test", onclick: ()=>{console.log(1)}});
        const btn = new IntrinsicElements('button', {value: "test", onclick: ()=>{console.log(2)}});
        
        const btn2 = new IntrinsicElements('button', {value: "test", onclick: ()=>{console.log(3)}});

        return {type: h1.htmlElement, child: [btn.htmlElement, btn2.htmlElement]} as KoactNode<HTMLElement>;
    }
}