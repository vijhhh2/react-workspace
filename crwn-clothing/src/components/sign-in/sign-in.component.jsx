import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.component.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('Error creating user', error.msg);
        }
    }

    handleChange = (event) => {
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
                    <div className='buttons'>
                        <CustomButton type='submit'>SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle>SignIn With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;