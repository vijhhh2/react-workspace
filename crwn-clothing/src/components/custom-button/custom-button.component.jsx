import React from 'react'
import './custom-button.component.scss'

const Button = ({ children, isGoogle, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogle ? 'google-button' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default Button
