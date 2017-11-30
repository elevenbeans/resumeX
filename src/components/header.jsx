'use strict';
import React from 'react';
import { LINK_CONFIG, SOCIAL_CONFIG } from '../data/header';


const AppHeader = () => (
  <header>
    <div className = "app-link">
      <ul>
        {
          LINK_CONFIG.map(item => (
            <li key = {Math.random()}>
              <a
                target = "_blank"
                rel = "noopener noreferrer"
                href = {item.link}
              >
                {item.text}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
    <div className = "app-social">
      <ul>
        {
          SOCIAL_CONFIG.map(item => (
            <li
              className = {item.type}
              key = {Math.random()}
            >
              <a
                target = "_blank"
                rel = "noopener noreferrer"
                href = {item.link}
              >
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  </header>
);

export default AppHeader;
