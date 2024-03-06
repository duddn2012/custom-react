import Component from "./Component";

export type HtmlElementProps = {
    value: string;
    onclick?: ()=>any;
}


export interface KoactNode<T extends (HTMLElement | Component)> {
    type: T;
    child: T[];
}