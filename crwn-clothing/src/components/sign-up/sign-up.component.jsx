import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

import './sign-up.component.scss'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, displayName, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('Passwords did not match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      this.setState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log('Error creating User', error.message)
    }
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, displayName, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>SignUp with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGNUP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
