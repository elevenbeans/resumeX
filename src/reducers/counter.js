// Reducer
const DEFAULT_VALUE = {
	count: 0,
	inputPannelOn: false,
	messageArr: [],
	pannelArr: [],
	preId: 1000,
	status: '对方正在输入 ...',
	inputDisabled: true
}
const counter = (state = DEFAULT_VALUE, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
};
export default counter;