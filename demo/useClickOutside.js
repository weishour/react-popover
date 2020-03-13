"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useClickOutside(callback, nodes) {
    var _a = react_1.useState(false), isTouchEvent = _a[0], setTouchEvent = _a[1];
    var eventType = isTouchEvent ? 'touchend' : 'click';
    function handleEvent(e) {
        if (nodes.some(function (node) { return node === null || node === void 0 ? void 0 : node.contains(e.target); }))
            return;
        callback(e);
    }
    react_1.useEffect(function () {
        document.addEventListener(eventType, handleEvent, true);
        return function () {
            document.removeEventListener(eventType, handleEvent, true);
        };
    });
    react_1.useEffect(function () {
        setTouchEvent('ontouchstart' in document.documentElement);
    }, []);
}
exports.default = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map