

// console.log(module);

// similar to export default
// module.exports = "Perscholas"

// similar to export (exports an objects with key value pairs)
module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(dayNo) {
	if (dayNo < 0 || dayNo > 6) dayNo = 0;
	return this.weekdays[dayNo];
};