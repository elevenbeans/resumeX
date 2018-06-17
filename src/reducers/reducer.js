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
  switch (action.type) {
  case 'TOGGLE_PANNEL':
    return {
      inputPannelOn: action.onSwitch && !state.inputDisabled,
      messageArr: state.messageArr,
      pannelArr: state.pannelArr,
      preId: state.preId,
      status: state.status
    };
  case 'INIT_DEFAULT_MSG':
    return {
      messageArr: action.defaultMsg.messageArr,
      pannelArr: action.defaultMsg.pannelArr,
      preId: state.preId,
      inputDisabled: true
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
      inputDisabled: false,
      preId: state.preId
    };
  case 'SELECT_RESPONSE':
    var _userSentence = {
      isUser: true,
      text: [
        findSentence(
          state.preId
        ).responses
          ?
          findSentence(
            state.preId
          ).responses[action.index].content
          :
          Data.fromUser[action.index].content
      ]
    };
    if (!action.hasMore) {
      return {
        messageArr: [
          ...state.messageArr,
          _userSentence
        ],
        pannelArr: state.pannelArr,
        preId: state.preId,
        inputPannelOn: state.inputPannelOn,
        inputDisabled: true
      };
    } else {
      return {
        messageArr: state.messageArr,
        preId: state.preId,
        status: '对方正在输入 ...',
        inputDisabled: true
      };
    }
  case 'GET_MORE_RESPONSE':
    return {
      messageArr: action.arr,
      preId: action.id,
      status: '对方正在输入 ...',
      inputDisabled: true,
      inputPannelOn: state.inputPannelOn
    };
  case 'GET_REST_RESPONSE':
    state.messageArr.pop();
    return {
      messageArr: [
        ...state.messageArr,
        action.mySentence
      ],
      pannelArr: findSentence(action.id).responses || Data.fromUser,
      preId: action.id,
      status: '请输入 ...',
      inputDisabled: false,
      inputPannelOn: state.inputPannelOn
    };
  default:
    return state;
  }
};

export default reducer;
