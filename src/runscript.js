// Virtual DOM은 런타임 메모리로서 존재하며 컴포넌트와 Virtual DOM Tree를 관리한다.
const vdom = VirtualDom.getInstance();

//Input Component 세팅
//React.createElement(MyCompo, null); => 영우.createElement(MyCompo, null);
//DOM 파싱을 구현하려면 모든 event, 고정 props 등을 등록해야하므로 구현은 힘들듯?
//React는 Babel에 추가되어 있음.
const inputComp = Component("input");
const inputComp2 = Component("input");
const inputComp3 = Component("input");
const inputComp4 = Component("input");
const button = Component("button");
class MyComp extends Component {}

vdom.print();

/*
Work List
VDOM - Comp - Hook
1. Component
    - props
    - life cycle
    - state (구조만)
2. Hook(component 행동적 관리)
3. VDOM(component 구조적 관리 / Fiber 구현 / commit(추후))
*/
