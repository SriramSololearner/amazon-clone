import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='logo' src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="NO-IMG" />
            </Link>
            
            <div className="Login_Container">
                <h1 style={{'fontWeight':'450', 'fontSize':'29px', 'marginTop':'5px','marginBottom':'10px'}}>Sign in</h1>
                <form className="form">
                    <h5>Email or mobile phone number</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" name="" id="" />
                    <button className='Login_btn'>Continue</button>

                    <p>
                        By continuing, you agree to Amazon's 
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of <br/> Use </a>  
                        and
                        <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"> Privacy Notice.</a>
                        
                    </p>

                    
                    <details>
                        <summary className='details'>Need Help?</summary>
                        <p>Forgot password?</p>
                        <p>Other issues with sign in</p>
                    </details>
                    
                </form>

                
            </div>
            <div>
                <p id="new">New to Amazon?</p>
                
                <Link to='/Register'>
                    <button className="signup">Create Your Amazon Account</button>
                </Link>
                
            </div>
            

        </div>
    )
}

export default Login