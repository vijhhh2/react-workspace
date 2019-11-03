import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.component.scss';
import { HomeContainer } from './homepage.styles';

export const HomePage: React.FC = () => {
    return (
        <HomeContainer>
            <Directory />
        </HomeContainer>
    );
}