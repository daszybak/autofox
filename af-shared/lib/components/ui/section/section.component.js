var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Container } from '@mantine/core';
import { useStyles } from './section.styles';
var Section = function (_a) {
    var _b;
    var children = _a.children, classNames = _a.classNames, styles = _a.styles, unstyled = _a.unstyled, className = _a.className, _c = _a.first, first = _c === void 0 ? false : _c, others = __rest(_a, ["children", "classNames", "styles", "unstyled", "className", "first"]);
    var _d = useStyles(undefined, { name: 'Section', classNames: classNames, unstyled: unstyled }), classes = _d.classes, cx = _d.cx;
    return (React.createElement("section", { className: cx(classes.sectionContainer, className, (_b = {}, _b[classes.firstSection] = first, _b)) },
        React.createElement(Container, { className: classes.container }, children)));
};
export default Section;
//# sourceMappingURL=section.component.js.map