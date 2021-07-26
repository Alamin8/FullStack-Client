import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';



const Login = () => {

    const {state, dispatch} = useContext(UserContext)

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const history = useHistory()
    const loginUser= async (e)=>{
        e.preventDefault()
        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                 password:password
            })
        })
        const data = await res.json()
        if(res.status===400 || !data){
            window.alert('Invalid Credentials')
        }else{
            dispatch({type:'USER', payload:true})
            window.alert('Login Successfull')
            history.push('/')
        }
    }

    return (
        <>
            <section className="signin p-5 ">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h1 className="form-title mb-5 ">Sign In</h1>
                            <form method="POST" className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="form-control"
                                        // autoComplete="off" 
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="password">Password </label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control"
                                        // autoComplete="off" 
                                        placeholder="Your password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div> <br />
                                <div className="form-group form-button">
                                    <input 
                                        type="submit" 
                                        name="signin" 
                                        id="signin"
                                        className="form-submit btn btn-dark"
                                        value="Log In"
                                        onClick={loginUser}
                                    />
                                </div> <br />
                                <div>
                                    <NavLink to="/signup" >Create an Account</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;