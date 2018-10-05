export default (val) => {
	var d = new Date(val);
	var n = d.toUTCString();
	return n;
}