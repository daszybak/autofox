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
import _ from 'lodash';
import { queryDefaultValues } from '../constants/query-params';
export var adWhereInputToSearchFormInput = function (where, attributeDefinitions) {
    var _a;
    var whereInputToFormInput = function (data) {
        return _(data)
            .map(function (value, key) {
            var _a, _b;
            var _c, _d;
            var attributeDefintion = attributeDefinitions.find(function (attributeDefintion) { return attributeDefintion.attribute === key; });
            if (!attributeDefintion)
                return;
            if ((attributeDefintion.dataType === 'boolean' ||
                (attributeDefintion.dataType === 'int' && attributeDefintion.inputType === 'select') ||
                (attributeDefintion === null || attributeDefintion === void 0 ? void 0 : attributeDefintion.dataType) === 'Category') &&
                value &&
                'equals' in value) {
                return _a = {},
                    _a[key] = value === null || value === void 0 ? void 0 : value.equals,
                    _a;
            }
            if ((attributeDefintion.dataType === 'int' || attributeDefintion.dataType === 'DateTime') &&
                attributeDefintion.inputType === 'range' &&
                value &&
                ('lte' in value || 'gte' in value)) {
                return _b = {},
                    _b[key] = [(_c = value.gte) !== null && _c !== void 0 ? _c : '', (_d = value.lte) !== null && _d !== void 0 ? _d : ''],
                    _b;
            }
        })
            .reduce(function (memo, current) { return _.assign(memo, current); }, {});
    };
    var AdAuto = whereInputToFormInput((_a = where.ad_auto) === null || _a === void 0 ? void 0 : _a.is);
    var Ad = whereInputToFormInput(where);
    console.log('adWhereInputToSearchFormInput');
    console.log('AdAuto', AdAuto);
    console.log('Ad', Ad);
    return __assign(__assign({}, queryDefaultValues), { Ad: Ad, AdAuto: AdAuto });
};
//# sourceMappingURL=ad-where-input-to-search-form-input.js.map