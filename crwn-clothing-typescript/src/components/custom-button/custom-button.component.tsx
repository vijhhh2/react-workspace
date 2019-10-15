import React from 'react';
import './custom-button.component.scss';
import { ICustomButton } from '../../models/form-input.model';

const CustomButton: React.FC<ICustomButton>  = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;