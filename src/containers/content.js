// Map Redux state to component props
import { connect } from 'react-redux'
import { showInputPannelAction } from '../actions/content';
import { closeInputPannelAction, selectResponce} from '../actions/inputpannel';

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
    onShowInputPannel: () => dispatch(showInputPannelAction()),
    onCloseInputPannel: () => dispatch(closeInputPannelAction()),
    onSelectResponce: () => dispatch(selectResponce())
  }
}

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;