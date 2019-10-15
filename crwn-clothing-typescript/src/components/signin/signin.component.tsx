import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.component.scss';

interface IProps {}
interface IState {
    email: string;
    password: string;
}

class SignIn extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e);
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        this.setState({...this.state, [name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <p>Sign in with your email and password</p>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required/>
                    <FormInput
                    type="password"
                    name="password"
                    label='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required/>
                    <CustomButton type='submit'>SignIn</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;