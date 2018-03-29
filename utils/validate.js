
const Validate = (data) => {
	return !!data && data.length && data.length >= 4;
}

export default Validate;