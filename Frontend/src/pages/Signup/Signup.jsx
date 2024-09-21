import React from 'react';
import Signup from '../../components/Auth/Signup/Signup.jsx';

const SignupPage = ({isEmailVerified , setIsEmailVerified}) => {
    return (
        <div className='body-bg '>
            <Signup isEmailVerified={ isEmailVerified} setIsEmailVerified={setIsEmailVerified} />
        </div>
    );
};

export default SignupPage;
