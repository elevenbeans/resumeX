'use strict';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dialog from './components/dialog';
import AppHeader from './components/header';
import InputPannel from './components/inputpannel';

import Data from './data/dialog';

import './style.less';

// 关闭 HMR 调整 CSS，开启调整 JS
// if (module.hot) module.hot.accept();
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	inputPannelOn: false,
    	messageArr: [],
    	pannelArr: []
    };
  }
  componentDidMount = () => {
  	this.setState(() => ({
  		messageArr: [
  			{
  				isUser: false,
  				text: this.findSentence(1000)
  					.details.join()
  			}
  		],
  		pannelArr: 
  			this.findSentence(1000).responses ||
  			Data.fromUser,
  		preId: 1000
  	}));
  }
  findSentence = id => {
  	return Data.fromElevenBeans.find((item) => (
  		item.id == id
  	));
  }
  showInputPannel = () => {
  	this.setState({
  		inputPannelOn: true
  	});
  }
  closeInputPannel = () =>{
	  this.setState({
			inputPannelOn: false
		});
  }
  selectResponce = (id, index) => {
  	var _mySentence = {
  		isUser: false,
  		text: this.findSentence(id).details.join()
  	};
  	var _userSentence = {
  		isUser: true,
  		text: [
  			this.findSentence(
  				this.state.preId
  			).responses
  			?
  			this.findSentence(
  				this.state.preId
  			).responses[index].content
  			:
  			Data.fromUser[index].content
  		]
  	}
  	// console.log(_userSentence);
  	this.setState({
  		messageArr: [
  			...this.state.messageArr,
  			_userSentence,
  			_mySentence
  		],
  		pannelArr: this.findSentence(id).responses ||
  		  Data.fromUser,
  		preId: id
  	},() => {
  		this.scrollBottom();
  	});
  }
  scrollBottom(){
    var _el = document.getElementById("J_scroll");
    _el.scrollTop = _el.scrollHeight + 1000;
    console.log('top:',_el.scrollTop);
    console.log('height:',_el.scrollHeight);
	}
	render() {
		console.log(this.state.messageArr);
		return (
			<div className = "app-wrapper">
	    	<AppHeader></AppHeader>
	    	<div className = "app-phone" >
	    		<div className = "phone-wrapper">
	    			{this.state.inputPannelOn &&
	    				<div>
			    			<div className = "app-mask"></div>
		    				<InputPannel
		    					closeInputPannel = {this.closeInputPannel}
		    					selectResponce = {this.selectResponce}
		    					pannelArr = {this.state.pannelArr}
		    					preId = {this.state.preId}
		    				/>
	    				</div>
	    			}
	    			<div className = "app-message">
		    			<div className = "message-padding"></div>
		    			<div className = "message-content" id = "J_scroll">
		    				<Dialog
		    					messageArr = {this.state.messageArr}
		    				/>
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
