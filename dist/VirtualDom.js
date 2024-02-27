// Control Virtual DOM
// Virtual DOM 트리와 Component 관계를 동일한 tree 구조로 표현함.
var VirtualDom = /** @class */ (function () {
    function VirtualDom() {
        this.vdomTree = [];
        this.componentTree = [];
        this.observers = [];
        this.registerRoot(document.getElementById("root"));
        VirtualDom.instance = this;
    }
    VirtualDom.prototype.addObserver = function (observer) {
        this.observers.push(observer);
        this.notifyObserver(observer);
    };
    VirtualDom.prototype.notifyObserver = function (component) {
        this.register(component);
    };
    VirtualDom.getInstance = function () {
        return VirtualDom.instance || new VirtualDom();
    };
    VirtualDom.prototype.register = function (component, parentComponent) {
        if (!parentComponent)
            parentComponent = this.getRoot();
        var parentComponentNode = this.componentTree.find(function (cn) { return cn.component.element === (parentComponent === null || parentComponent === void 0 ? void 0 : parentComponent.element); });
        parentComponentNode === null || parentComponentNode === void 0 ? void 0 : parentComponentNode.childs.push(component);
        this.componentTree.push({ component: component, states: [], childs: [] });
        if (!component.element || !(parentComponent === null || parentComponent === void 0 ? void 0 : parentComponent.element))
            return;
        this.updateVdom(component.element, parentComponent === null || parentComponent === void 0 ? void 0 : parentComponent.element);
    };
    VirtualDom.prototype.updateVdom = function (domElement, parentElement) {
        var parentVdom = this.vdomTree.find(function (vde) { return vde.vdom === parentElement; });
        parentVdom === null || parentVdom === void 0 ? void 0 : parentVdom.child.push(domElement);
        this.vdomTree.push({ vdom: domElement, child: [] });
        parentElement.insertAdjacentElement("afterbegin", domElement);
    };
    VirtualDom.prototype.registerRoot = function (rt) {
        var comp = { element: rt };
        this.vdomTree.push({ vdom: rt, child: [] });
        this.componentTree.push({ component: comp, states: [], childs: [] });
    };
    VirtualDom.prototype.getRoot = function () {
        return this.componentTree[0].component;
    };
    return VirtualDom;
}());
export default VirtualDom;
export var vdom = VirtualDom.getInstance();
