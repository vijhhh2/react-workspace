import React from "react";
import "./menu-item.component.scss";

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
      <div 
      style={{
        backgroundImage: `url(${imageUrl})`
      }} className="background-image"></div>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
