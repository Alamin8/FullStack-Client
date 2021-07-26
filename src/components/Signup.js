import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: ''
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user
        if (!name || !email || !phone || !work || !password || !cpassword) {
            window.alert('Please filled all the fields')
        } else {
            const res = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // name:name, 
                    // email:email, 
                    // phone:phone, 
                    // work:work, 
                    // password:password, 
                    // cpassword:cpassword
                    // or write one line as ES6
                    name, email, phone, work, password, cpassword
                })
            })
            const data = await res.json()
            if (data.status === 422 || !data) {
                window.alert('Invalid Registration')
                console.log("Invalid Registration");
            } else {
                window.alert('Registration Successfull')
                console.log('Registration Successfull');
                history.push('/login')
            }
        }

    }

    return (
        <>
            <section className="signup p-5">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title mb-5 ">Sign Up</h1>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Your name"
                                        required={true}
                                        value={user.name}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="email">Email </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Your email"
                                        required={true}
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="phone">Phone </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="form-control"
                                        placeholder="Your mobile number"
                                        required={true}
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="work">Work </label>
                                    <input
                                        type="text"
                                        name="work"
                                        id="work"
                                        className="form-control"
                                        placeholder="Your profession"
                                        required={true}
                                        autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="password">Password </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Your password"
                                        required={true}
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="cpassword">Confirm Password </label>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        required={true}
                                        autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                    />
                                </div> <br />
                                <div className="form-group form-button">
                                    <input
                                        type="submit"
                                        name="signup"
                                        id="signup"
                                        className="form-submit btn btn-dark"
                                        value="Register"
                                        onClick={postData}
                                    />
                                </div> <br />
                                <div>
                                    <NavLink to="/login">I am already resister</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;