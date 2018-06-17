import Data from '../data/dialog';

const findSentence = id => Data.fromElevenBeans.find(item => (
  item.id == id
));

const scrollBottom = () => {
  var _el = document.getElementById('J_scroll');
  _el.scrollTop = _el.scrollHeight;
};

const getToggleInputPannelAction = onSwitch => ({
  type: 'TOGGLE_PANNEL',
  onSwitch
});

const getInitDefaultMsgAction = defaultMsg => ({
  type: 'INIT_DEFAULT_MSG',
  defaultMsg
});

const getFirstMsgAction = firstMsgId => ({
  type: 'GET_FIRST_MSG',
  firstMsgId
});

const getSelectResponseAction = (id, index, hasMore) => (dispatch, getState) => {
  const state = getState();
  const _emptySentence = {
    isUser: false,
    text: ''
  };
  const _mySentence = {
    isUser: false,
    text: findSentence(id).details.join('')
  };
  var _userSentence = {
    isUser: true,
    text: [
      findSentence(
        state.preId
      ).responses
        ?
        findSentence(
          state.preId
        ).responses[index].content
        :
        Data.fromUser[index].content
    ]
  };
  var tempArr = [];
  if (hasMore) {
    tempArr = [
      ...state.messageArr,
      _emptySentence
    ];
  } else {
    tempArr = [
      ...state.messageArr,
      _userSentence,
      _emptySentence
    ];
  }
  dispatch({
    type: 'SELECT_RESPONSE',
    id,
    index,
    hasMore
  });
  scrollBottom();
  setTimeout(
    () => {
      dispatch(getMoreResponseAction(tempArr, id, index, _mySentence));
      scrollBottom();
    }, 1000 // mock 我的响应时间, 固定 1s
  );
  setTimeout(
    () => {
      dispatch(getRestResponseAction(id, index, _mySentence));
      scrollBottom();
    }, 3000 // mock 我的响应时间, 固定 1s
  );
};

const getMoreResponseAction = (arr, id, index, sentence) => ({
  type: 'GET_MORE_RESPONSE',
  arr,
  id,
  index,
  sentence
});

const getRestResponseAction = (id, index, mySentence) => dispatch => {
  dispatch({
    type: 'GET_REST_RESPONSE',
    id,
    index,
    mySentence
  });
  scrollBottom();
  if (findSentence(id).hasMore) {
    dispatch(
      getSelectResponseAction(
        findSentence(id).hasMore,
        index,
        true
      )
    );
    scrollBottom();
  }
};

const getRandomWaitingSec = () => Math.floor(Math.random() * 4 + 1) * 1000;

export const toggleInputPannelAction = (dispatch, onSwitch) => {
  dispatch(getToggleInputPannelAction(onSwitch));
};

export const initDefaultMsgAction = (dispatch, defaultMsg) => {
  dispatch(getInitDefaultMsgAction(defaultMsg));
  setTimeout(
    () => { dispatch(getFirstMsgAction(1000)); },
    getRandomWaitingSec() // mock 请求返回时间
  );
};

export const selectResponseAction = (dispatch, id, index, hasMore) => {
  dispatch(getSelectResponseAction(id, index, hasMore));
};
