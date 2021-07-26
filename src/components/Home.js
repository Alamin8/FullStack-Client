import React, { useEffect, useState } from 'react';

const Home = () => {
    const [userName, setUserName] = useState({
        name: ''
    })
    const [show, setShow]=useState(false)
    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            const data = await res.json()
            setUserName({ name: data.name })
            setShow(true)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage()
    }, [])
    return (
        <>
            <section style={{ height: "calc(100vh - 56px)" }}>
                <div className="container text-center">
                    <div className="home-content" style={{ padding: "400px 0px" }}>
                        <h5 className="text-info">WELCOME</h5>
                        <h1 style={{ fontWeight: "700", fontSize: "45px" }}>{userName.name}</h1>
                        <h2>{show ? 'Happy, to show you back': "We Are The MERN Developer"}</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;