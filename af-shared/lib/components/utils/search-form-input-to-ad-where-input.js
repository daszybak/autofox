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
import { FILE_CODES } from '../constants/file';
export var searchFormInputsToAdWhereInput = function (data, attributeDefinitions) {
    var _a;
    console.log('attributeDefinitions', attributeDefinitions);
    var formInputToWhereInput = function (data, attributeDefinitions) {
        return _(data)
            .pickBy(_.identity)
            .mapValues(function (value, key) {
            var attributeDefintion = attributeDefinitions.find(function (attributeDefintion) { return attributeDefintion.attribute === key; });
            if ((attributeDefintion === null || attributeDefintion === void 0 ? void 0 : attributeDefintion.dataType) === 'boolean')
                return { equals: value === 'true' };
            if ((attributeDefintion === null || attributeDefintion === void 0 ? void 0 : attributeDefintion.dataType) === 'DateTime' && attributeDefintion.inputType === 'range') {
                return __assign(__assign({}, (value[0] ? { gte: value[0] } : {})), (value[1] ? { lte: value[1] } : {}));
            }
            if ((attributeDefintion === null || attributeDefintion === void 0 ? void 0 : attributeDefintion.dataType) === 'int' && attributeDefintion.inputType === 'range') {
                return __assign(__assign({}, (_.toNumber(value[0]) ? { gte: _.toNumber(value[0]) } : {})), (_.toNumber(value[1]) ? { lte: _.toNumber(value[1]) } : {}));
            }
            return { equals: _.toNumber(value) };
        })
            .value();
    };
    var adInput = formInputToWhereInput(data.Ad, attributeDefinitions);
    var adAutoInput = formInputToWhereInput(data.AdAuto, attributeDefinitions);
    console.log('adauto', adAutoInput);
    console.log('ad', adInput);
    var WithImage = (_a = data.WithImage) !== null && _a !== void 0 ? _a : false;
    return __assign(__assign(__assign({}, adInput), { ad_auto: {
            is: adAutoInput,
        } }), (WithImage && {
        files: {
            some: {
                code: {
                    equals: FILE_CODES.IMAGE,
                },
            },
        },
    }));
};
//# sourceMappingURL=search-form-input-to-ad-where-input.js.map