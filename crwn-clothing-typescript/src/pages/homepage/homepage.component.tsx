import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.component.scss';

export const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}