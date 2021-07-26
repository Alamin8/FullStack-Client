import React, { useEffect, useState } from 'react';
const Contact = () => {
    const [userData, setUserData]=useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })
    const userContact = async ()=>{
        try{
            const res = await fetch('/getdata', {
                method:"GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            const data = await res.json()
            setUserData({...userData, name:data.name, email:data.email, phone:data.phone})
            if(!res.status===200){
                const error = new Error(res.error)
                throw error;
            }
            
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(()=>{
        userContact()
    },[])
    
    //we are storing data in state
    const handleInputs=(e)=>{
       const name = e.target.name
        const value = e.target.value
        setUserData({...userData , [name]:value})
    }

    //send data backend
    const contactForm= async (e)=>{
        e.preventDefault()

        const {name, email, phone, message} = userData
        const res = await fetch('/contact', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name:name, email:email, phone:phone, message:message
            })
        })
        const data = await res.json()
        if(!data){
            console.log("Message not send");
        }else{
            window.alert('Message Send Successfull')
            setUserData({...userData, message:''})
        }
    } 


    return (
        <>
            <section className="contact_info p-5">
                <div className="container mt-5">
                    <div className="contact_info_content">
                        <div className="contact_info_form">
                            <h1 className="form-title mb-5 ">Get In Touch</h1>
                            <form method="POST" id="contact_form">
                                <div className="form-group">
                                    <label htmlFor="contact_form_name">Name </label>
                                    <input 
                                        type="text"
                                        id="contact_form_name" 
                                        className="form-control"
                                        // autoComplete="off" 
                                        placeholder="Your name"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleInputs}
                                        
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="contact_form_email">Email </label>
                                    <input 
                                        type="email"  
                                        id="contact_form_email" 
                                        className="form-control"
                                        // autoComplete="off" 
                                        placeholder="Your email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleInputs}
                                        
                                    />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="contact_form_phone">Phone </label>
                                    <input 
                                        type="tel" 
                                        id="contact_form_phone" 
                                        className="form-control"
                                        // autoComplete="off" 
                                        placeholder="Your mobile number"
                                        // value={`0${userData.phone}`}
                                        name="phone"
                                        value={userData.phone}
                                        onChange={handleInputs}
                                        
                                    />
                                </div> <br />
                                <div className="form-group">
                                <label htmlFor="contact_form_message">Message</label>
                                    <textarea 
                                        id="contact_form_message" 
                                        rows="10" 
                                        className="form-control"
                                        name="message"
                                        placeholder="Message here"
                                        value={userData.message}
                                        onChange={handleInputs}
                                        
                                    ></textarea>
                                </div> <br />
                                <div className="form-group form-button">
                                    <button 
                                        type="submit" 
                                        className="form-submit btn btn-primary"
                                        onClick={contactForm}
                                        >Send Message</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;