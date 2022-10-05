import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='login' >
            <Link to='/'>
                <img className='logo' src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="NO-IMG" />
            </Link>

            <div className="Register_Container">

                <h1 style={{ 'fontWeight': '450', 'fontSize': '29px', 'marginTop': '5px', 'marginBottom': '10px' }}> Create Account </h1>

                <form className="form">

                    <h5>Your name</h5>
                    <input type="text" placeholder='First and last name' />
                    <h5>Mobile number or email</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" placeholder='At least 6 characters'/>
                    <h5>Re-enter password</h5>
                    <input type="password" />
                    <button className='Login_btn'>Continue</button>

                    <p>
                        By creating an account, you agree to Amazon's
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of  Use </a>
                        and
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice.</a>

                    </p>

                    <br/>
                    <p> Already have an account?
                        <Link to='/Login'> Sign in </Link> 
                    </p>

                    <p style={{ 'marginTop': '0px', 'marginBottom': '10px' }}> Buying for work? <a href='https://www.amazon.com/business/register/org/landing?ref_=ap_altreg_ab'> Create a free business account </a> </p>
                </form>
                
            </div>
            <hr />

        </div>
    )
}

export default Register