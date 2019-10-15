import React from 'react';
import './header.component.scss';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => (
    <div className='header'>
        <Link to='/'className='logo-container'>
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
);

export default Header;