'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Dialog from './components/dialog';

import './style.less';

// 关闭 HMR 调整 CSS，开启调整 JS
// if (module.hot) module.hot.accept();

const App = () => (
    <div className = "app-wrapper">
    	<div className = "app-phone" >
    		<div className = "app-message">
    			<Dialog />
    		</div>
    	</div>
    </div>
);

// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
