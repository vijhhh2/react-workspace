import React from 'react';
import './menu-item.component.scss';

interface Props {
    title: string;
    imageUrl: string;
    size: string | undefined;
}

export const MenuItem: React.FC<Props> = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} menu-item`}>
        <div 
        style={{
          backgroundImage: `url(${imageUrl})`
        }} className="background-image"></div>
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
};