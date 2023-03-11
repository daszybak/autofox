import React from 'react';
import { Container as MantineContainer } from '@mantine/core';
import { useStyles } from './container.styles';
var Container = function (_a) {
    var children = _a.children, className = _a.className;
    var _b = useStyles(), classes = _b.classes, cx = _b.cx;
    var containerClasses = cx(className, classes.container);
    return (React.createElement(MantineContainer, { fluid: true, className: containerClasses }, children));
};
export default Container;
//# sourceMappingURL=container.component.js.map