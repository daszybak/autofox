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
import Image from 'next/image';
import { Card as CardMantine } from '@mantine/core';
import NoImage from '../no-image/no-image.component';
import { useStyles } from './card.styles';
var Card = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, classNames = _a.classNames, styles = _a.styles, unstyled = _a.unstyled, className = _a.className, image = _a.image, Header = _a.Header, variant = _a.variant, p = _a.p, others = __rest(_a, ["children", "classNames", "styles", "unstyled", "className", "image", "Header", "variant", "p"]);
    var _c = useStyles({ variant: variant }, { name: 'MyCard', classNames: classNames, unstyled: unstyled }), classes = _c.classes, cx = _c.cx;
    return (React.createElement(CardMantine, __assign({ className: cx(classes.cardContainer, className), ref: ref }, others),
        Header && React.createElement(Header, null),
        React.createElement("div", { className: cx((_b = {}, _b[classes.orientation] = variant === 'horizontal', _b)) },
            React.createElement("div", { className: classes.imageContainer }, image ? (React.createElement(Image, { layout: "fixed", width: image.width, height: image.height, src: image.src, alt: image.alt })) : (React.createElement("div", { className: classes.imagePlaceholder },
                React.createElement(NoImage, null)))),
            React.createElement("div", { className: classes.contentContainer }, children))));
});
export default Card;
//# sourceMappingURL=card.component.js.map