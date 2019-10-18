import React from 'react';
import SingIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './sign-in-and-sign-up.component.scss';

const SignInAndSignUpPage: React.FC<{}> = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;