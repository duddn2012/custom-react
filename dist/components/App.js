var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
import Component from "../framework/Component.js";
import IntrinsicElements from "../framework/IntrinsicElements.js";
var App = /** @class */ (function (_super) {
  __extends(App, _super);
  function App() {
    return _super.call(this) || this;
  }
  App.prototype.render = function () {
    var h1 = new IntrinsicElements("h1", {
      value: "test",
      onclick: function () {
        console.log(1);
      },
    });
    var btn = new IntrinsicElements("button", {
      value: "test",
      onclick: function () {
        console.log(2);
      },
    });
    var btn2 = new IntrinsicElements("button", {
      value: "test",
      onclick: function () {
        console.log(3);
      },
    });
    return { type: h1.htmlElement, child: [btn.htmlElement, btn2.htmlElement] };
  };
  return App;
})(Component);
export { App };
