import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.service'

import './signup.component.scss'

type State = typeof initialState
type Props = {}

const initialState = {
  email: '',
  displayName: '',
  password: '',
  confirmPassword: '',
}

class SignUp extends React.Component<Props, State> {
  state: State = initialState

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password, displayName, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('Passwords does not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      this.setState({...initialState})
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({ ...this.state, [name]: value })
  }

  render() {
    const { email, password, displayName, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>SignUp with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
