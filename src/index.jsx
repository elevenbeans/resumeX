'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import 'style.css';

// 关闭 HMR 调整 CSS，开启调整 JS
// if (module.hot) module.hot.accept();

const App = () => (
    <div>
    	<h1>My new resume ～
    	</h1>
    </div>
);



// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
