import React from 'react';
import { Container } from '@mantine/core';
import { useStyles } from './flex-container.styles';
var FlexContainer = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = useStyles(), classes = _b.classes, cx = _b.cx;
    var containerClasses = cx(className, classes.container);
    console.log(containerClasses);
    return (React.createElement(Container, { fluid: true, className: containerClasses }, children));
};
export default FlexContainer;
//# sourceMappingURL=flex-container.component.js.map