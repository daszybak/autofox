import React from 'react';
import Link from '../link/link.component';
import { useRouter } from 'next/router';
var Links = function (_a) {
    var data = _a.data, className = _a.className;
    var router = useRouter();
    var renderedLinks = data.map(function (_a) {
        var path = _a.path, label = _a.label;
        return (React.createElement("li", { key: label, className: className },
            React.createElement(Link, { label: label, href: path, active: router.asPath === path })));
    });
    return React.createElement("ul", null, renderedLinks);
};
export default Links;
//# sourceMappingURL=links.component.js.map