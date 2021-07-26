import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <section style={{height:"calc(100vh - 56px)"}}>
                <div className="container text-center">
                    <div className="home-content" style={{padding:"300px 0px"}}>
                    <h1 style={{fontWeight:"700", fontSize:"75px"}}>404!</h1>
                    <h1 style={{fontWeight:"700", fontSize:"45px"}}>WE ARE SORRY, PAGE NOT FOUND!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus  <br /> dolore iusto repudiandae repellat velit?</p>
                        <NavLink className="btn btn-primary" to="/">BACK TO HOME</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;