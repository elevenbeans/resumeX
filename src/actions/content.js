export const toggleInputPannelAction = onSwitch => ({
  type: 'TOGGLE_PANNEL',
  onSwitch
});

export const initDefaultMsgAction = defaultMsg => ({
  type: 'INIT_DEFAULT_MSG',
  defaultMsg
});

export const getFirstMsgAction = firstMsgId => ({
  type: 'GET_FIRST_MSG',
  firstMsgId
});

export const selectResponseAction = (id, index, hasMore) => ({
  type: 'SELECT_RESPONSE',
  id,
  index,
  hasMore
});
