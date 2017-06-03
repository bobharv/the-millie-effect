var sanitizer = require('sanitizer');

exports.sanitizeObject = function(object) {
	for(var attribute in object) {
    	object[attribute] = sanitizer.sanitize(object[attribute]);
	}

	return object;
}