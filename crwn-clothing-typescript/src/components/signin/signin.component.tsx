import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { signInWithGoogle } from '../../firebase/firebase.service';
import { auth, signInWithGoogle} from '../../firebase/firebase.service';
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

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('Error creating user', error.message);
        }
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
                    type='email'
                    name='email'
                    value={this.state.email}
                    label='email'
                    handleChange={this.handleChange}
                    required/>
                    <FormInput
                    type='password'
                    name='password'
                    label='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
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