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
import { NativeSelect } from '@mantine/core';
import { useStyles } from './transparent-select.styles';
var Transperent = React.forwardRef(function (_a, ref) {
    var data = _a.data, classNames = _a.classNames, styles = _a.styles, unstyled = _a.unstyled, className = _a.className, others = __rest(_a, ["data", "classNames", "styles", "unstyled", "className"]);
    var classes = useStyles(undefined, { name: 'Transperent', classNames: classNames, unstyled: unstyled }).classes;
    return React.createElement(NativeSelect, __assign({ className: classes.nativeSelect, data: data, ref: ref }, others));
});
export default Transperent;
//# sourceMappingURL=transparent-select.component.js.map