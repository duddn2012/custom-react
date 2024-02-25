/*
 Component 생성 시 DOM 객체 생성 후 Virtual DOM에 register

 State => Component의 메모리
 State가 필요한 이유
 1. 로컬변수는 리랜더링될 때 다시 초기화 되므로 컴포넌트 내에서 의미있는 처리를 하기 어렵다.
 2. 로컬변수에 대한 변경은 렌더를 트리거하지 않는다.

 그러므로 컴포넌트를 새 데이터로 업데이트하려면 
 1. 렌더가 트리거 되어도 데이터를 유지해야한다.
 2. React에게 새 데이터로 컴포넌트를 다시 렌더링하도록 알려야 한다.


 20240223
 1.
new ParentComp("button", value);
new Component("button", value, par);
2.
<ParentCompc className={}>
<MyComp/>
</ParentCompc>
3.
const v1 =new ParentComp();
const v2 =new MyComp ();

[v1, [v2, [v3]]];

3번 방법 Component 추상 클래스를 통한 관리
1. props
2. life cycle
3. state
4. hook

기본 HTML 태그들은 등록이 필요함.
*/
import VirtualDom from "./VirtualDom";

const vdom = VirtualDom.getInstance();

export default class Component {

    constructor (element: HTMLElement){

    }
}

class MyComponent extends Component {}
