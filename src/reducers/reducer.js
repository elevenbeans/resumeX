// Reducer
import Data from '../data/dialog';

const DEFAULT_VALUE = {
  inputPannelOn: false,
  messageArr: [],
  pannelArr: [],
  preId: 1000,
  status: '对方正在输入 ...',
  inputDisabled: true
};

const findSentence = id => Data.fromElevenBeans.find(item => (
  item.id == id
));

const reducer = (state = DEFAULT_VALUE, action) => {
  // const count = state.count;
  switch (action.type) {
  case 'TOGGLE_PANNEL':
    return {
      inputPannelOn: action.onSwitch
    };
  case 'INIT_DEFAULT_MSG':
    return {
      messageArr: action.defaultMsg.messageArr,
      pannelArr: action.defaultMsg.pannelArr
    };
  case 'GET_FIRST_MSG':
    return {
      messageArr: [
        {
          isUser: false,
          text: findSentence(action.firstMsgId).details.join('')
        }
      ],
      pannelArr: findSentence(action.firstMsgId).responses || Data.fromUser,
      status: '请输入 ...',
      inputDisabled: false
    };
  case 'SELECT_RESPONSE':
    return {};
  default:
    return state;
  }
};

export default reducer;
