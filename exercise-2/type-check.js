function type_check_v1(value, type) {
    if (value === null || !type) {
        return false;
    }
    if(value === undefined ) {
    	return true;
    }

    return value.constructor.name.toLowerCase() === type.toLowerCase();
}