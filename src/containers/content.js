// Map Redux state to component props
import { connect } from 'react-redux'
import { increaseAction, showInputPannelAction} from '../actions/content';

import Content from '../components/content';

function mapStateToProps(state) {
  return {
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
    onShowInputPannel: () => dispatch(showInputPannelAction())
  }
}

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;