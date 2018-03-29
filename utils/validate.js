import _ from 'lodash';

const Validate = (data) => {
	
	const errors = {};
	
	for (let i in data) {
		if (i == 'errors' || i == 'password_confirm')
			continue;
		if (!data[i] || (data[i].length && data[i].length < 4))
			errors[i] = i + ' must be at least 4 characters long...';
	}
	
	if (data.password_confirm !== undefined && data.password_confirm !== data.password)
		errors.password_confirm = 'Passwords should be the same...';

	return _.isEmpty(errors) ? null : errors;
}

export default Validate;