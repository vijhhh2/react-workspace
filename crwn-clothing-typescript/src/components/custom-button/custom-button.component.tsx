import React from 'react'
import './custom-button.component.scss'
import { ICustomButton } from '../../models/form-input.model'

const CustomButton: React.FC<ICustomButton> = ({
  children,
  isGoogle,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogle ? 'google-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
