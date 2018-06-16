import React from 'react';
import Loading from './loading';

import '../style/dialog.less';

const Dialog = props => (
  <div className="app-lialog">
    {props.messageArr.map(item=>(
      <div key = {Math.random()}>
        <div
          className = {
            item.isUser ? 'msg-in-right' : 'msg-in-left'
          }
          style = {{
            'transform': item.text ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          <div
            className = "item"
            dangerouslySetInnerHTML = {{
              __html: item.text ? item.text : Loading
            }}
          >
          </div>
          <div className = "pointer"></div>
        </div>
      </div>
    ))
    }
  </div>
);

export default Dialog;
