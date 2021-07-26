import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserAvatar from '../images/Avatar-female.png'
const About = () => {
    const history = useHistory()
    const [userData, setUserData]=useState({})
    const callAboutPage = async ()=>{
        try{
            const res = await fetch('/about', {
                method:"GET",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                credentials:'include'
            });

            const data = await res.json()
            setUserData(data)
            if(!res.status===200){
                const error = new Error(res.error)
                throw error;
            }
            
        }catch(err){
            console.log(err);
            history.push('/login')
        }
    }
    useEffect(()=>{
        callAboutPage();
    },[])

    return (
        <>
            <section>
                <div className="container">
                    <form action="GET" className="py-5 px-4  mt-5 mb-4" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}>
                        <div className="row ">
                            <div className="col-md-4">
                                <img src={UserAvatar} alt="User Avater" style={{ width: "250px" }} />
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>{userData.name}</h5>
                                    <h6>{userData.work}</h6>
                                    <p className="profile-rating mt-3 mb-5">Rankings: <span>1/10</span></p>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" >About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" >Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="submit" name="btnAddMore" className="profile-edit-btn btn btn-info text-white" value="Edit Profile" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            {/* Left Side Url */}
                            <div className="col-md-4">
                                <div className="profile-work">
                                    <h6 className="mb-2">WORK LINK</h6>
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Facebook</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Instagram</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Linkedin</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Twiter</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Web Site</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Portfolio</a> <br />
                                    <a href="https://www.facebook.com/alaminmirdha99/" target="_blank">Skype</a>
                                </div>
                            </div>
                            {/* Right side data toggle */}
                            <div className="col-md-8 pl-5 about-info">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User ID</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">{userData._id}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">{userData.name}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">{userData.email}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info" >+880{userData.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">{userData.work}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Exprience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">Expert</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Total Project</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">230</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Engilsh Level </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">Expert</p>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label>Avalability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="text-info">6 months</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default About;