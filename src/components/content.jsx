import React, { Component } from 'react';
import Dialog from './dialog';
import InputPannel from './inputpannel';
import Data from '../data/dialog';

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputPannelOn: false,
      messageArr: [],
      pannelArr: [],
      preId: 1000,
      status: '对方正在输入 ...',
      inputDisabled: true
    };
  }
  componentDidMount = () => {
    const {
      initDefaultMsg,
      getFirstMsg
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
    setTimeout(
      () => { getFirstMsg(1000); },
      this.getRandomWaitingSec() // mock 请求返回时间
    );
  }
  getRandomWaitingSec = () => Math.floor(Math.random() * 4 + 1) * 1000
  selectResponce = (id, index, hasMore) => {
    var _emptySentence = {
      isUser: false,
      text: ''
    };
    var _mySentence = {
      isUser: false,
      text: this.findSentence(id).details.join('')
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
    };
    var tempArr = [];
    if (hasMore) {
      tempArr = [
        ...this.state.messageArr,
        _emptySentence
      ];
    } else {
      tempArr = [
        ...this.state.messageArr,
        _userSentence,
        _emptySentence
      ];
      this.setState({
        messageArr: [
          ...this.state.messageArr,
          _userSentence
        ]
      }, () => {
        this.scrollBottom();
      });
    }
    setTimeout(
      () => {
        this.getMoreResponce(tempArr, id, index, _mySentence);
      }, 1000 // mock 我的响应时间, 固定 1s
    );
  }
  getMoreResponce = (arr, id, index, sentence) => {
    this.setState(
      {
        messageArr: arr,
        preId: id,
        status: '对方正在输入 ...',
        inputDisabled: true
      },
      () => {
        this.scrollBottom();
        setTimeout(
          () => this.getRestMessage(id, index, sentence),
          this.getRandomWaitingSec() // mock 请求返回时间
        );
      }
    );
  }
  getRestMessage = (id, index, mySentence) => {
    this.state.messageArr.pop();
    this.setState({
      messageArr: [
        ...this.state.messageArr,
        mySentence
      ],
      pannelArr: this.findSentence(id).responses || Data.fromUser,
      preId: id,
      status: '请输入 ...',
      inputDisabled: false
    }, () => {
      this.scrollBottom();
      if (this.findSentence(id).hasMore) {
        this.selectResponce(
          this.findSentence(id).hasMore,
          index,
          true
        );
      }
    });
  }
  findSentence = id => {
    return Data.fromElevenBeans.find((item) => (
      item.id == id
    ));
  }
  scrollBottom() {
    var _el = document.getElementById('J_scroll');
    _el.scrollTop = _el.scrollHeight;
  }
  render() {
    const {
      inputPannelOn,
      onShowInputPannel,
      messageArr,
      pannelArr,
      onCloseInputPannel
    } = this.props;
    console.log('messageArr:', messageArr);
    console.log('pannelArr:', pannelArr);
    return (
      <div className = "app-phone" >
        <div className = "phone-wrapper">
          {inputPannelOn &&
            <div>
              <div className = "app-mask"></div>
              <InputPannel
                onCloseInputPannel = {onCloseInputPannel}
                onSelectResponce = {
                  this.selectResponce
                }
                pannelArr = {pannelArr}
                preId = {this.state.preId}
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
              {this.state.status}
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
