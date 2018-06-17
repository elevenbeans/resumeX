import React, { Component } from 'react';
import Dialog from './dialog';
import InputPannel from './inputpannel';
import Data from '../data/dialog';

class AppContent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const {
      initDefaultMsg
    } = this.props;
    initDefaultMsg({
      messageArr: [
        {
          isUser: false,
          text: ''
        }
      ],
      pannelArr: Data.fromUser
    });
  }
  render() {
    const {
      inputPannelOn,
      selectResponse,
      onShowInputPannel,
      messageArr,
      pannelArr,
      onCloseInputPannel,
      preId,
      status
    } = this.props;
    return (
      <div className = "app-phone" >
        <div className = "phone-wrapper">
          {inputPannelOn &&
            <div>
              <div className = "app-mask"></div>
              <InputPannel
                onCloseInputPannel = {onCloseInputPannel}
                onSelectResponce = {
                  selectResponse
                }
                pannelArr = {pannelArr}
                preId = {preId}
              />
            </div>
          }
          <div className = "app-message">
            <div className = "message-padding"></div>
            <div className = "message-content" id = "J_scroll">
              <Dialog
                messageArr = {messageArr}
              />
            </div>
          </div>
          {!inputPannelOn &&
            <div
              className = "app-input-bar"
              onClick = {onShowInputPannel}
            >
              {status}
              <div className  = "app-input-button">
                <div className = "input-arrow"></div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AppContent;
