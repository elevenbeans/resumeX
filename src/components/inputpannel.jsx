import React from 'react';

const InputPannel = ({ pannelArr, onCloseInputPannel, onSelectResponce }) => (
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
        {pannelArr.map((item, index) => (
          <li
            key = {index}
            onClick = {
              () => (
                onSelectResponce(
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

export default InputPannel;
