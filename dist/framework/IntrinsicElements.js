var IntrinsicElements = /** @class */ (function () {
    function IntrinsicElements(elementName, props) {
        var element = document.createElement(elementName);
        this.props = props;
        this.element = element;
        this.setProps();
    }
    IntrinsicElements.prototype.setProps = function () {
        this.element.innerHTML = this.props.value;
        this.element.addEventListener("click", this.props.onclick);
    };
    Object.defineProperty(IntrinsicElements.prototype, "htmlElement", {
        get: function () {
            return this.element;
        },
        enumerable: false,
        configurable: true
    });
    return IntrinsicElements;
}());
export default IntrinsicElements;
