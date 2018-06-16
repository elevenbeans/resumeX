// Reducer
const DEFAULT_VALUE = {
  inputPannelOn: false,
  messageArr: [],
  pannelArr: [],
  preId: 1000,
  status: '对方正在输入 ...',
  inputDisabled: true
};

const reducer = (state = DEFAULT_VALUE, action) => {
  // const count = state.count;
  switch (action.type) {
  case 'TOGGLE_PANNEL':
    return {
      inputPannelOn: action.onSwitch
    };
  case 'SELECT_RESPONCE':
    return {
      inputPannelOn: false
    };
  default:
    return state;
  }
};

export default reducer;
