"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var react_dom_1 = __importDefault(require("react-dom"));
var useClickOutside_1 = __importDefault(require("./useClickOutside"));
var useGetStyle_1 = require("./useGetStyle");
var transitionTime = 200;
var createWrapper = function () {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    document.body.appendChild(div);
    return div;
};
var PopoverElement = react_1.forwardRef(function (props, ref) {
    var content = props.content, popoverStyle = props.popoverStyle, arrowStyle = props.arrowStyle, visible = props.visible, parent = props.parent, theme = props.theme, popoverClass = props.popoverClass;
    if (!parent)
        return null;
    var hasPopoverStyle = popoverStyle instanceof Object && Object.keys(popoverStyle).length;
    return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, { in: visible, classNames: "app-popover-wrapper", timeout: transitionTime },
        react_1.default.createElement("div", { ref: ref, className: "app-popover " + theme + " " + popoverClass, style: __assign(__assign({}, popoverStyle), { opacity: hasPopoverStyle ? 1 : 0, display: visible ? 'block' : 'none' }) },
            react_1.default.createElement("div", { className: "app-popover-arrow", style: arrowStyle }),
            react_1.default.createElement("div", { className: "app-popover-content" }, content))), parent);
});
var ReactPopover = function (_a) {
    var content = _a.content, children = _a.children, trigger = _a.trigger, position = _a.position, theme = _a.theme;
    if (!react_1.isValidElement(children)) {
        console.error('Popover children is empty or not a vaild element!');
        return null;
    }
    var wrapperRef = react_1.useRef();
    var _b = react_1.useState(false), visible = _b[0], setVisible = _b[1];
    var childRef = react_1.useRef(null);
    var _c = react_1.useState(), popoverCurrent = _c[0], setPopoverCurrent = _c[1];
    var popoverRef = react_1.useCallback(function (node) {
        node && setPopoverCurrent(node);
    }, []);
    var _d = useGetStyle_1.useGetStyle(childRef.current, popoverCurrent, position), popoverStyle = _d.popoverStyle, arrowStyle = _d.arrowStyle, popoverClass = _d.popoverClass;
    var renderWraper = function () {
        if (!wrapperRef.current) {
            wrapperRef.current = createWrapper();
        }
    };
    useClickOutside_1.default(function () {
        setVisible(false);
    }, [popoverCurrent, childRef.current]);
    react_1.useEffect(function () {
        return function () {
            if (wrapperRef.current)
                document.body.removeChild(wrapperRef.current);
        };
    }, []);
    var cloneChildren = react_1.cloneElement(children, {
        ref: childRef,
        onMouseOverCapture: function () {
            if (trigger === 'click')
                return;
            renderWraper();
            if (!visible)
                setVisible(true);
        },
        onMouseOut: function () {
            if (trigger === 'click')
                return;
            setVisible(false);
        },
        onClickCapture: function () {
            if (trigger !== 'click')
                return;
            renderWraper();
            if (!visible)
                setVisible(true);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        cloneChildren,
        react_1.default.createElement(PopoverElement, { ref: popoverRef, parent: wrapperRef.current, content: content, visible: visible, popoverStyle: popoverStyle, arrowStyle: arrowStyle, popoverClass: popoverClass, theme: theme })));
};
ReactPopover.defaultProps = {
    trigger: 'hover',
    position: 'bottomLeft',
    theme: 'light'
};
exports.default = ReactPopover;
//# sourceMappingURL=index.js.map