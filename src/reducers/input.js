const input = (state = {
    inputPannelOn: false,
    messageArr: [],
    pannelArr: [],
    preId: 1000,
    status: '对方正在输入 ...',
    inputDisabled: true
  }
, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'CLOSE_INPUT':
      return true;
    default:
      return state;
  }
}

export default input;
