import React, { Component } from 'react';

class InputPannel extends Component {
  constructor(props) {
    super(props);
  }
  closeInputPannel = () => {
    this.props.closeInputPannel();
  }
  selectResponce = (id, index) => {
    this.props.selectResponce(id, index);
  }
  render() {
    return (
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
            {
              this.props.pannelArr.map((item, index) => (
                <li
                  key = {index}
                  onClick = {
                    () => (
                      this.selectResponce(
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
