// Map Redux state to component props
import { connect } from 'react-redux';
import { toggleInputPannelAction } from '../actions/content';

import Content from '../components/content';

const mapStateToProps = state => ({
  inputPannelOn: state.inputPannelOn
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onShowInputPannel: () => dispatch(toggleInputPannelAction(true)),
  onCloseInputPannel: () => dispatch(toggleInputPannelAction(false))
});

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;
