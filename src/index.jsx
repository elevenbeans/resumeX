import React from 'react';
// import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

import AppHeader from './components/header';
import AppContent from './containers/content';
import AppFooter from './components/footer';

import './style/index.less';

// React component
const App = () => (
  <div className = "app-wrapper">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
);

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
