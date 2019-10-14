import React from "react";
import "./menu-item.component.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
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
