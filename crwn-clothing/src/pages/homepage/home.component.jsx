import React from 'react';
import './home.component.scss';

import Directory from '../../components/directory/directory.component';

export const HomePage = () => {
    return (
        <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
    );
};