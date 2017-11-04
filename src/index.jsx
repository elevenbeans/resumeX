'use strict';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dialog from './components/dialog';
import AppHeader from './components/header';

import './style.less';

// 关闭 HMR 调整 CSS，开启调整 JS
// if (module.hot) module.hot.accept();
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	inputPannelOn: false
    };
  }
  showInputPannel = () => {
  	console.log('sdf');
  	this.setState({
  		inputPannelOn: true
  	});
  }
  closeInputPannel =() =>{
	  this.setState({
			inputPannelOn: false
		});
  }
	render() {
		return (
			<div className = "app-wrapper">
	    	<AppHeader></AppHeader>
	    	<div className = "app-phone" >
	    		<div className = "phone-wrapper">
	    			{this.state.inputPannelOn &&
		    				<div className = "app-mask"></div>
		    		}
	    			{this.state.inputPannelOn &&
	    				<div
	    					className = "app-input-pannel"
	    					onClick = {this.closeInputPannel}
	    				>
		    				<div
			    				className = "app-input-bar"
			    			>
			    				请输入 ...
			    				<div className  = "app-input-button">
			    					<div className = "input-arrow"></div>
			    				</div>
			    			</div>
			    			<div className = "app-input-options">
			    				<ul>
			    					<li>是的</li>
			    					<li>不对</li>
			    					<li>哈哈哈</li>
			    				</ul>
			    			</div>
	    				</div>
	    			}
	    			<div className = "app-message">
		    			<div className = "message-padding"></div>
		    			<div className = "message-content">
		    				<Dialog />
		    			</div>
		    		</div>
	    			{!this.state.inputPannelOn &&
	    				<div
		    				className = "app-input-bar"
		    				onClick = {this.showInputPannel}
		    			>
		    				请输入 ...
		    				<div className  = "app-input-button">
		    					<div className = "input-arrow"></div>
		    				</div>
		    			</div>
	    			}
	    		</div>
	    	</div>
	    </div>
		)
	}
}

// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
