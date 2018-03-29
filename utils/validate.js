import _ from 'lodash';

const MIN_LENGTH = 1;

const Validate = (data) => {
	
	const errors = {};
	
	for (let i in data) {
		if (i == 'errors' || i == 'password_confirm')
			continue;
		if (!data[i] || (data[i].length && data[i].length < MIN_LENGTH))
			errors[i] = i + ` must be at least ${MIN_LENGTH} characters long...`;
	}
	
	if (data.password_confirm !== undefined && data.password_confirm !== data.password)
		errors.password_confirm = 'Passwords should be the same...';

	return _.isEmpty(errors) ? null : errors;
}

export default Validate;