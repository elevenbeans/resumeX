import React from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducer';

import AppHeader from './components/header';
import AppContent from './containers/content';
import AppFooter from './components/footer';

import './style/index.less';

// React component
const App = () => (
  // const { value, onIncreaseClick } = this.props
  <div className = "app-wrapper">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
);

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// Action
// const increaseAction = { type: 'increase' }

// Store
const store = createStore(reducer);

// Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Resume)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
