"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var arrowWidth = 12;
var arrowHeight = 12;
exports.useGetStyle = function (children, popover, positon) {
    var _a = react_1.useState({}), popoverStyle = _a[0], setPopoverStyle = _a[1];
    var _b = react_1.useState({}), arrowStyle = _b[0], setArrowStyle = _b[1];
    var _c = react_1.useState(), popoverClass = _c[0], setPopoverClass = _c[1];
    react_1.useEffect(function () {
        if (!children || !popover)
            return;
        var childrenRect = children.getBoundingClientRect();
        var popoverRect = popover.getBoundingClientRect();
        var childrenTop = childrenRect.top, childrenLeft = childrenRect.left, childrenWidth = childrenRect.width, childrenHeight = childrenRect.height;
        var popoverWidth = popoverRect.width, popoverHeight = popoverRect.height;
        var topTop = childrenTop - popoverHeight - arrowHeight;
        var rightLeft = childrenLeft + childrenWidth;
        var bottomTop = childrenTop + popoverHeight;
        var leftLeft = childrenLeft - popoverWidth - arrowWidth;
        switch (positon) {
            case 'topLeft':
                setPopoverStyle({ top: topTop, left: childrenLeft, paddingBottom: 10 });
                setArrowStyle({ left: childrenWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 });
                setPopoverClass('top');
                break;
            case 'top':
                setPopoverStyle({ top: topTop, left: childrenLeft + childrenWidth / 2 - popoverWidth / 2, paddingBottom: 10 });
                setArrowStyle({ right: popoverWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 });
                setPopoverClass('top');
                break;
            case 'topRight':
                setPopoverStyle({ top: topTop, left: childrenLeft + childrenWidth - popoverWidth, paddingBottom: 10 });
                setArrowStyle({ right: childrenWidth / 2 - arrowWidth / 2, bottom: arrowHeight / 2 });
                setPopoverClass('top');
                break;
            case 'rightTop':
                setPopoverStyle({ left: rightLeft, top: childrenTop, paddingLeft: 10 });
                setArrowStyle({ top: childrenHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 });
                setPopoverClass('right');
                break;
            case 'right':
                setPopoverStyle({ left: rightLeft, top: childrenTop + childrenHeight / 2 - popoverHeight / 2, paddingLeft: 10 });
                setArrowStyle({ top: popoverHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 });
                setPopoverClass('right');
                break;
            case 'rightBottom':
                setPopoverStyle({ left: rightLeft, top: childrenTop + childrenHeight - popoverHeight, paddingLeft: 10 });
                setArrowStyle({ bottom: childrenHeight / 2 - arrowHeight / 2, left: arrowWidth / 2 });
                setPopoverClass('right');
                break;
            case 'bottomRight':
                setPopoverStyle({ top: bottomTop, left: childrenLeft + childrenWidth - popoverWidth, paddingTop: 10 });
                setArrowStyle({ right: childrenWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 });
                setPopoverClass('bottom');
                break;
            case 'bottom':
                setPopoverStyle({ top: bottomTop, left: childrenLeft + childrenWidth / 2 - popoverWidth / 2, paddingTop: 10 });
                setArrowStyle({ right: popoverWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 });
                setPopoverClass('bottom');
                break;
            case 'bottomLeft':
                setPopoverStyle({ top: bottomTop, left: childrenLeft, paddingTop: 10 });
                setArrowStyle({ left: childrenWidth / 2 - arrowWidth / 2, top: arrowHeight / 2 });
                setPopoverClass('bottom');
                break;
            case 'leftBottom':
                setPopoverStyle({ left: leftLeft, top: childrenTop + childrenHeight - popoverHeight, paddingRight: 10 });
                setArrowStyle({ bottom: childrenHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 });
                setPopoverClass('left');
                break;
            case 'left':
                setPopoverStyle({ left: leftLeft, top: childrenTop + childrenHeight / 2 - popoverHeight / 2, paddingRight: 10 });
                setArrowStyle({ top: popoverHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 });
                setPopoverClass('left');
                break;
            case 'leftTop':
                setPopoverStyle({ left: leftLeft, top: childrenTop, paddingRight: 10 });
                setArrowStyle({ top: childrenHeight / 2 - arrowHeight / 2, right: arrowWidth / 2 });
                setPopoverClass('left');
                break;
        }
    }, [children, popover, positon]);
    return { popoverStyle: popoverStyle, arrowStyle: arrowStyle, popoverClass: popoverClass };
};
//# sourceMappingURL=useGetStyle.js.map