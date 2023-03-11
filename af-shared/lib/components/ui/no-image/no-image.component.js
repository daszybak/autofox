import React from 'react';
import { MdOutlineNoPhotography } from 'react-icons/md';
import { useStyles } from './no-image.styles';
var NoImage = function (_a) {
    var className = _a.className;
    var _b = useStyles(), classes = _b.classes, cx = _b.cx;
    return (React.createElement("div", { className: cx(classes.flexAlignJustifyCenter, className) },
        React.createElement(MdOutlineNoPhotography, { size: 48 })));
};
export default NoImage;
//# sourceMappingURL=no-image.component.js.map