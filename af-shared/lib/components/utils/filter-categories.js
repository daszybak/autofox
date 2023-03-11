export var filterCategories = function (categories, code, parentCategoryId) {
    return categories.filter(function (category) { var _a; return (parentCategoryId ? category.code === code && ((_a = category.parent_category_id) === null || _a === void 0 ? void 0 : _a.toString()) === parentCategoryId : category.code === code); });
};
//# sourceMappingURL=filter-categories.js.map