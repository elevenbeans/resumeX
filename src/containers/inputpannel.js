// Map Redux state to component props
import { connect } from 'react-redux'
import { closeInputPannelAction, onSelectResponce} from '../actions/inputpannel';

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
    onCloseInputPannel: () => dispatch(closeInputPannelAction()),
    onSelectResponce: () => dispatch(onSelectResponce())
  }
}

// Connected Component
const Pannel = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputPannel);

export default Pannel;