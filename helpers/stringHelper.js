exports.toCamelCase = function(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

exports.toHyphenated = function(str) {
	//remove special characters
	var str = str.replace(/[^a-zA-Z0-9 ]/g, "");

	//replace spaces with hyphens
	str = str.replace(/\s+/g, "-");

	return str.toLowerCase();
}