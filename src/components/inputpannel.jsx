import React, { Component } from 'react';
import Data from '../data/dialog';

class InputPannel extends Component {
	constructor(props) {
		super(props);
  }
  onSelectResponce = (id, index) => {
  	this.props.onSelectResponce(id, index);
  }
  render() {
  	const {
  		pannelArr,
  		onCloseInputPannel,
  		onSelectResponce
  	} = this.props;
		return (
			<div
				className = "app-input-pannel"
				onClick = {onCloseInputPannel}
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
						{
							this.props.pannelArr.map((item, index) => (
								<li
									key = {index}
									onClick = {
										() => (
											this.onSelectResponce(
												item.nextElevenbeans, index
											)
										)
									}
									id = {item.nextElevenbeans}
								>
									{item.content}
								</li>								
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default InputPannel;