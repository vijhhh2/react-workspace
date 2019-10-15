import React from 'react';
import SingIn from '../../components/signin/signin.component';

import './sign-in-and-sign-up.component.scss';

const SignInAndSignUpPage: React.FC<{}> = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
    </div>
);

export default SignInAndSignUpPage;