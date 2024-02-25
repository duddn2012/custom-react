/*
1. 선언형
2. 컴포넌트 기반 계층 구조
3. 단방향
*/

import Component from "./Component.ts";
import VirtualDom from "./VirtualDom.ts";

const vdom = VirtualDom.getInstance();

const v1 = new ParentComp();
const v2 = new MyComp ();
const v4 = new MyComp ();

//부모 자식 관계 
v1.registChild(v2);

//커스텀 컴포넌트 예시
class MyComp extends Component {
    //`~~

    return (
        new Input({value="", id="", });
        new Input({value="", id="", });
        new Input({value="", id="", });
        new Input({value="", id="", });
    );

}

//내장 HTML 태그 API
const v3 = new Input({value="", id="", });

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
