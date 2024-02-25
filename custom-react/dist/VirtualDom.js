// Control Virtual DOM
// Virtual DOM 트리와 Component 관계를 동일한 tree 구조로 표현함.

// <Component register>
// 1. Component register 단계 : component 트리에 등록 및 Virtual DOM이 Component에 대한 관리 시작
// 2. V-DOM Update 단계: Virtual DOM Tree에 해당 컴포넌트 등록
// 3. Commit 단계: Actual DOM 으로 변경 사항 commit => 그러나 현재는 비교 로직 구현이 안되어 있으므로 바로 html 적용

/* 
<Virtual DOM 은 불필요한 리플로우를 적게 발생시킨다.>
가령 순수 JS로 동적으로 HTML을 수정할 경우 리플로우 대상은 수정한 element와 하위 element 이외의 다른 부분들까지 적용될 수 있다.
하지만 react의 Virtual DOM은 먼저 Virtual DOM에서 랜더링 작업을 완료하고 실제로 Actual DOM과 비교하여 달라진 부분만 
commit을 보내므로 브라우저의 불필요한 리플로우를 적게 발생 시킬 수 있는 것이다.
*/

class VirtualDom {
  #vdomTree;
  #componentTree;
  static #instance;

  constructor() {
    if (VirtualDom.#instance) return VirtualDom.#instance;
    const rt = document.getElementById("root"); //root 노드는 기본 생성
    this.#vdomTree = [{ vdom: rt, child: [] }]; //Virtual DOM tree 초기화
    this.#componentTree = [{ component: rt, state: [], child: [] }]; //Component tree 초기화
    VirtualDom.#instance = this;
  }

  static getInstance() {
    return this.#instance || new this();
  }

  register(component, parentComponent) {
    if (!parentComponent) parentComponent = this.getRoot();

    const parentComp = this.#componentTree.find((comp) => comp.component === parentComponent);
    parentComp.child.push(component);
    this.#componentTree.push({ component, state: [], child: [] });

    this.updateVdom(component, parentComponent);
  }

  updateVdom(domElement, parentElement) {
    //만약 부모 컴포넌트에서 수정이 일어나면 모든 하위 컴포넌트는 모두 rerender 되어야 함.

    //부모 컴포넌트를 찾아서 자식 배열에 추가
    const parentVdom = this.#vdomTree.find((vde) => vde.vdom === parentElement);
    parentVdom.child.push(domElement);
    this.#vdomTree.push({ domElement, child: [] });

    parentElement.insertAdjacentElement("afterbegin", domElement); //TODO Actual DOM에 commit을 요청하는 로직임 추후 Fiber(reconciler) 개발 하면 분리 예정
  }

  getRoot() {
    return this.#vdomTree[0].vdom;
  }

  print() {
    this.#vdomTree.forEach((element) => {
      console.log(element);
    });
  }
}
