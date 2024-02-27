// lifecycle 메소드(layouteffect {layout(render-tree) 직후 mount(painting) 전 실행}, effect {rendering 후 mount 후에 실행, Paint랑 비동기 실행})
// hook? 메소드 => Hook 메소드 호출
/*
    1. HTMLElement 등록과 Component 등록 모두 필요한 케이스
    2. HTMLElement는 존재하며 Component 등록만 필요한 케이스
*/
import { vdom } from "./VirtualDom.js";
var Component = /** @class */ (function () {
  function Component(element) {
    this.states = [];
    this.props = [];
    this.element = null;
    this.diff = false;
    this.element = element;
    vdom.addObserver({ element: this.element });
  }
  Component.prototype.lifeCycleMethods = function () {};
  Component.prototype.render = function (element) {
    this.element = element;
  };
  Object.defineProperty(Component.prototype, "htmlElement", {
    //TODO DOM 트리구조 처리가 가능하도록 수정 필요
    get: function () {
      return this.element;
    },
    enumerable: false,
    configurable: true,
  });
  return Component;
})();
export default Component;
