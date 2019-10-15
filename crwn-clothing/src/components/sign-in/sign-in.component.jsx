import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.component.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        console.log(event);
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='Email'
                    required/>
                    <FormInput
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='Password'
                    required/>
                    <CustomButton type='submit'>SignIn</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;