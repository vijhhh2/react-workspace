import React from 'react';
import './menu-item.component.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    title: string;
    imageUrl: string;
    size?: string | undefined;
    linkUrl: string;
}

const MenuItem: React.FC<Props> = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
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

export default withRouter(MenuItem);