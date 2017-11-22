export const closeInputPannelAction = text => {
	return {
		type: 'HIDE_PANNEL',
		text
	};
}
export const onSelectResponce = text => {
	return {
		type: 'SELECT_RESPONCE',
		text
	};
}