/*
1. 선언형
2. 컴포넌트 기반 계층 구조
3. 단방향
*/
import { App } from "./components/App.js";
import { vdom } from "./framework/VirtualDom.js";
vdom.createRoot(document.getElementById("root")).render(new App().render());
