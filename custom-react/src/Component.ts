import VirtualDom from "./VirtualDom";

const vdom = VirtualDom.getInstance();

export default class Component {

    private state: unknown[] = [];
    private props: unknown[] = [];

    //lifecycle 메소드
    //hook? 메소드 => Hook 메소드 호출

    constructor (element: HTMLElement){
    }
}

class MyComponent extends Component {}
