export function useState(component, initialState) {
    var stateValue = typeof initialState === 'function' ? initialState() : initialState;
    var setState = function (value) {
        stateValue = value;
        //vdom.render({element: component});
    };
    return [stateValue, setState];
}
function useLayoutEffect() { }
function useEffect() { }
// 함수를 메모이제이션 하므로 내부에서 사용하는 변수들의 메모리 주소들이 고정되어 있어 의존성 배열에 변수를 지정해두지 않으면 오동작이 발생할 수 있다.
function useCallback() { }
