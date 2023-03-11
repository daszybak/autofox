export var timeConverter = function (dateTime) {
    var new_date = new Date(dateTime);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = new_date.getFullYear();
    var month = months[new_date.getMonth()];
    var date = new_date.getDate();
    var time = date + '. ' + month + '. ' + year + '.';
    return time;
};
//# sourceMappingURL=time-converter.js.map