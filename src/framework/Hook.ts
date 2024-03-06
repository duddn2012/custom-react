import Component from "./Component";
import { vdom } from "./VirtualDom";

/*
Hook?
함수 컴포넌트에서 React의 기능을 활용할 수 있는 함수.
가령 상태 관리나 컴포넌트 라이프사이클과 같은 기능들을 사용할 수 있도록 도와줌.

16ms 단위 시간을 기준으로 batch rerender가 발생함
근데 이때 setState 콜백 함수의 실행 시간이 16ms 를 초과할 경우 state값이 적용이 안되는 경우가 생길 수 있다.
이럴 경우 flushSync()를 통해 동기로 DOM을 갱신 시킨다!(DOM을 갱신 시킨 후 값 처리를 수행한다.)
콜백 함수는 queue에 넣어서 render 처리가 완료된 후 처리된다. 그러므로 값을 그대로 입력하면 의도하지 않게 처리가 된다.

 Built-in React Hooks 분석
 1. State Hooks - 상태를 다루는 훅

 2. Context Hooks

 3. Ref Hooks

 4. Effect Hooks

 5.Performance Hooks

 6. Resource Hooks

 7. Other Hooks
*/
type ExtractReturnType<T> = T extends (...args: any[]) => T ? (...args: any[]) => T : T;

export function useState<S>(component: Component, initialState?: ExtractReturnType<S>) {
    let stateValue = typeof initialState === 'function' ? (initialState as () => S)() : initialState;

    const setState =(value: typeof initialState) => {
        stateValue = value;
        //vdom.render({element: component});
    }
    return [stateValue, setState] as const;
}

function useLayoutEffect() {}
function useEffect() {}

// 함수를 메모이제이션 하므로 내부에서 사용하는 변수들의 메모리 주소들이 고정되어 있어 의존성 배열에 변수를 지정해두지 않으면 오동작이 발생할 수 있다.
function useCallback() {}
