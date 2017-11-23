// Map Redux state to component props
import { connect } from 'react-redux'
import { toggleInputPannelAction, selectResponce } from '../actions/content';

import Content from '../components/content';

function mapStateToProps(state) {
  return {
		inputPannelOn: state.inputPannelOn
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onShowInputPannel: () => dispatch(toggleInputPannelAction(true)),
    onCloseInputPannel: () => dispatch(toggleInputPannelAction(false))
  }
}

// Connected Component
const MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

export default MainContent;