import React, { useEffect, useState } from "react"
import { Detail } from "./Detail"

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [data, setData] = useState();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://koka.onrender.com/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        if(response.ok)
        {
            const data = await response.json();
            setData(data)
        }
        else
        {
            alert("No data found");
        }
        
    }
    return (
        <>
            <section className="d-flex justify-content-center mt-5" >
                <main className="border border-3 border-dark w-25">
                    <div className="inputForm container text-center p-0">
                        <div classname="head">
                            <h1 className="bg-dark text-light m-0" >Check Detail</h1>
                        </div>
                    </div>
                    <form className="fs-2 d-flex justify-content-center bg-light">
                        <div className="w-75 h-100">
                        
                            <label htmlfor="email" className="form-label mt-3">Enter Email</label>
                            <input type="email" className="form-control fs-5" name="email" placeholder="Enter registered email" value={user.email} onChange={handleInput} required />
                            <br/>
                            <label htmlfor="password" className="form-label">Enter Password</label>
                            <input type="password" className="form-control fs-5 " name="password" placeholder="Enter password" value={user.password} onChange={handleInput} required />
                            <button type="submit" style={{display:"block", margin:"10px auto", padding:10 }} className="btn btn-primary w-50 m- mt-4 fs-5 " onClick={handleSubmit}>Check</button>
                        </div>
                        
                    </form>
                </main>
            </section>

            {data && <Detail res={data} />}

        </>
    );
}
