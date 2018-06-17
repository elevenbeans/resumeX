// Map Redux state to component props
import { connect } from 'react-redux';
import {
  toggleInputPannelAction,
  initDefaultMsgAction,
  // getFirstMsgAction,
  selectResponseAction
} from '../actions/content';

import Content from '../components/content';

const mapStateToProps = state => ({
  inputPannelOn: state.inputPannelOn,
  messageArr: state.messageArr || [],
  pannelArr: state.pannelArr || [],
  preId: state.preId,
  status: state.status
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onShowInputPannel: () => toggleInputPannelAction(dispatch, true),
  onCloseInputPannel: () => toggleInputPannelAction(dispatch, false),
  initDefaultMsg: defaultMsg => initDefaultMsgAction(dispatch, defaultMsg),
  selectResponse: (id, index, hasMore) => selectResponseAction(dispatch, id, index, hasMore)
});

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;
