// Control Virtual DOM
// Virtual DOM 트리와 Component 관계를 동일한 tree 구조로 표현함.
var VirtualDom = /** @class */ (function () {
    function VirtualDom() {
        this.vdomTree = [];
        this.componentTree = [];
        this.observers = [];
        this.createRoot(document.getElementById("root"));
        VirtualDom.instance = this;
    }
    VirtualDom.getInstance = function () {
        return VirtualDom.instance || new VirtualDom();
    };
    VirtualDom.prototype.addObserver = function (observer) {
        this.observers.push(observer);
        //this.render(observer);    //TODO observer도 구현하자
    };
    VirtualDom.prototype.render = function (children) {
        this.getRoot().element.insertAdjacentElement("afterbegin", children.type);
        this.updateVdom(children);
    };
    VirtualDom.prototype.updateVdom = function (children) {
        children.child.forEach(function (element) {
            children.type.insertAdjacentElement("afterbegin", element); //TODO 현재 바로 commit => 추후 수정해야함
        });
    };
    VirtualDom.prototype.commit = function () {
        //diff Component 내용을 real DOM에 적용
    };
    VirtualDom.prototype.createRoot = function (rt) {
        var comp = { element: rt };
        this.vdomTree.push({ vdom: rt, child: [] });
        this.componentTree.push({ component: comp, states: [], childs: [] });
        return this;
    };
    VirtualDom.prototype.getRoot = function () {
        return this.componentTree[0].component;
    };
    return VirtualDom;
}());
export default VirtualDom;
export var vdom = VirtualDom.getInstance();
