export var createCategorySelectData = function (categories, placeholder) {
    if (!categories)
        return [];
    var output = categories.map(function (category) {
        return {
            label: category['name'],
            value: category['category_id'],
        };
    });
    if (placeholder !== undefined) {
        output.unshift({ label: placeholder !== null && placeholder !== void 0 ? placeholder : '', value: '' });
    }
    return output;
};
//# sourceMappingURL=create-category-select-data.js.map