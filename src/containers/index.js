// Map Redux state to component props
import { connect } from 'react-redux'
import { increaseAction } from '../actions/';

import AppContent from '../components/content';

function mapStateToProps(state) {
  return {
    count: state.count,
		inputPannelOn: state.inputPannelOn,
		messageArr: state.messageArr,
		pannelArr: state.pannelArr,
		preId: state.preId,
		status: state.status,
		inputDisabled: state.inputDisabled
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  }
}

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);

export default MainContent;