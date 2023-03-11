import React from 'react';
var sufixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var getBytes = function (bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (!bytes && '0 Bytes') || (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sufixes[i];
};
var Bytes = function (_a) {
    var bytes = _a.bytes;
    return React.createElement(React.Fragment, null, getBytes(bytes));
};
export default Bytes;
//# sourceMappingURL=bytes.component.js.map