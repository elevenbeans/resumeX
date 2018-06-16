// Map Redux state to component props
import { connect } from 'react-redux';
import {
  toggleInputPannelAction,
  initDefaultMsgAction,
  getFirstMsgAction,
  selectResponseAction
} from '../actions/content';

// import {} from ''; 看一下 book 怎么玩的

import Content from '../components/content';

const mapStateToProps = state => ({
  inputPannelOn: state.inputPannelOn,
  messageArr: state.messageArr || [],
  pannelArr: state.pannelArr || []
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onShowInputPannel: () => dispatch(toggleInputPannelAction(true)),
  onCloseInputPannel: () => dispatch(toggleInputPannelAction(false)),
  initDefaultMsg: defaultMsg => dispatch(initDefaultMsgAction(defaultMsg)),
  getFirstMsg: firstMsgId => dispatch(getFirstMsgAction(firstMsgId)),
  selectResponceAction: () => dispatch(selectResponseAction())
});

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;
