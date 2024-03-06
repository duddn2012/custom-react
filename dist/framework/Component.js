// lifecycle 메소드(layouteffect {layout(render-tree) 직후 mount(painting) 전 실행}, effect {rendering 후 mount 후에 실행, Paint랑 비동기 실행})
// hook? 메소드 => Hook 메소드 호출
/*
    1. HTMLElement 등록과 Component 등록 모두 필요한 케이스
    2. HTMLElement는 존재하며 Component 등록만 필요한 케이스
*/
var Component = /** @class */ (function () {
    function Component() {
        this.element = null;
        this.diff = false;
    }
    Component.prototype.setProps = function () {
        this.element.innerHTML = this.props.value;
        this.element.addEventListener("click", this.props.onclick);
    };
    Component.prototype.render = function () {
    };
    Component.prototype.triggerRender = function () {
        //before mount - lifecycle hook 실행
        //vdom과 비교하여 diff 부분 real dom 적용
        //after mount - lifecycle hook 실행
    };
    Object.defineProperty(Component.prototype, "htmlElement", {
        //TODO DOM 트리구조 처리가 가능하도록 수정 필요
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.setState = function (states) {
        this.states = states;
        this.triggerRender();
    };
    Component.prototype.lifeCycleMethods = function () {
    };
    return Component;
}());
export default Component;
