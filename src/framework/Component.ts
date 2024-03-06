// lifecycle 메소드(layouteffect {layout(render-tree) 직후 mount(painting) 전 실행}, effect {rendering 후 mount 후에 실행, Paint랑 비동기 실행})
// hook? 메소드 => Hook 메소드 호출
/*
    1. HTMLElement 등록과 Component 등록 모두 필요한 케이스
    2. HTMLElement는 존재하며 Component 등록만 필요한 케이스
*/

import { HtmlElementProps } from "./Koact";

type State = {
    [d: string]: string;
}

export default class Component {

    states: State;
    private props: HtmlElementProps;
    private element: HTMLElement | null = null;
    private diff: boolean = false;

    constructor () {
    }

    setProps() {
        this.element.innerHTML = this.props.value;

        this.element.addEventListener("click", this.props.onclick);
    }

    
    render (){
    }
    
    triggerRender() {
        //before mount - lifecycle hook 실행
        //vdom과 비교하여 diff 부분 real dom 적용
        //after mount - lifecycle hook 실행
    }


    
    //TODO DOM 트리구조 처리가 가능하도록 수정 필요
    get htmlElement(){
        return this.element;
    }
    
    setState(states) {
        this.states = states;
        this.triggerRender();
    }
    
    lifeCycleMethods() {

    }
}