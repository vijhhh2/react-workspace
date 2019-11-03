import React from 'react';
import './custom-button.component.scss';
import { ICustomButton } from '../../models/form-input.model';

// import { CustomButtonContainer } from './custom-button.styles';

const CustomButton: React.FC<ICustomButton> = ({
  children,
  isGoogle,
  inverted,
  ...otherProps
}) => (
  // <CustomButtonContainer isGoogle={isGoogle} inverted={inverted}>
  //   {children}
  // </CustomButtonContainer>
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogle ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
