// Map Redux state to component props
import { connect } from 'react-redux'
import { increaseAction } from '../actions/';

import InputPannel from '../components/inputpannel';

function mapStateToProps(state) {
  return {
		inputPannelOn: state.inputPannelOn,
		messageArr: state.messageArr,
		pannelArr: state.pannelArr,
		preId: state.preId
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(inputAction())
  }
}

// Connected Component
const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPannel);

export default Content;