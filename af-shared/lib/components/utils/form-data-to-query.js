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
import { stringify } from 'qs';
import _ from 'lodash';
import { removeFalsyValues } from './remove-falsy-values';
import { queryDefaultValues } from '../constants/query-params';
export var formDataToQuery = function (data) {
    var _a;
    return (__assign(__assign(__assign(__assign(__assign({}, (data.Ad && !_.isEmpty(removeFalsyValues(data.Ad)) && { Ad: stringify(removeFalsyValues(data.Ad)) })), (data.AdAuto && !_.isEmpty(removeFalsyValues(data.AdAuto)) && { AdAuto: stringify(removeFalsyValues(data.AdAuto)) })), (data.WithImage === true && { WithImage: data.WithImage.toString() })), (data.Sort && !_.isEqual(data.Sort, queryDefaultValues.Sort) && { Sort: stringify(removeFalsyValues(data.Sort)) })), (data.Page && data.Page !== 1 && { Page: (_a = data.Page) === null || _a === void 0 ? void 0 : _a.toString() })));
};
//# sourceMappingURL=form-data-to-query.js.map