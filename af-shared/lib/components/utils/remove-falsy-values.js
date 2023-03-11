import _ from 'lodash';
export var removeFalsyValues = function (obj) {
    return _(obj)
        .pickBy(function (value) {
        if (_.isArray(value))
            return _.some(value, _.identity);
        return _.identity(value);
    })
        .value();
};
//# sourceMappingURL=remove-falsy-values.js.map