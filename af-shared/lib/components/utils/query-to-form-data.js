import { parse } from 'qs';
import _ from 'lodash';
import { queryDefaultValues } from '../constants/query-params';
export var queryToFormData = function (query) { return ({
    Ad: _.get(query, 'Ad') ? parse(_.get(query, 'Ad')) : {},
    AdAuto: _.get(query, 'AdAuto') ? parse(_.get(query, 'AdAuto')) : {},
    WithImage: _.get(query, 'WithImage') ? Boolean(_.get(query, 'WithImage')) : queryDefaultValues.WithImage,
    Sort: _.get(query, 'Sort') ? parse(_.get(query, 'Sort')) : queryDefaultValues.Sort,
    Page: _.get(query, 'Page') ? _.toNumber(_.get(query, 'Page')) : queryDefaultValues.Page,
}); };
//# sourceMappingURL=query-to-form-data.js.map