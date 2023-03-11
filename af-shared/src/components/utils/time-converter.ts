export const timeConverter = (dateTime: any) => {
	const new_date = new Date(dateTime);
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const year = new_date.getFullYear();
	const month = months[new_date.getMonth()];
	const date = new_date.getDate();
	const time = date + '. ' + month + '. ' + year + '.';
	return time;
};
