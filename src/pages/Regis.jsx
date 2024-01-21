import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Detail } from "./Detail"

export const Reg = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        firstname: "",
        middlename: "",
        lastname: "",
        email: "v",
        roll: "",
        course: "",
        branch: "",
        desc: "",
        password: ""
    });
    
    const [data, setData] = useState();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,

        })
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://koka.onrender.com/api/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })

        console.log(response);
        if (response.ok) {
            setUser({
                username: "",
                firstname: "",
                middlename: "",
                lastname: "",
                email: "",
                roll: "",
                course: "",
                branch: "",
                desc: "",
                password: ""
            })
            const data = await response.json();
            setData(data)
            
   
        }
    }
    return (<>
    <div  className="main d-flex justify-content-center mt-5">
        <div className="main border border-3 w-50 border-dark bg-light">
            <div className="head  d-flex justify-content-center bg-dark text-light">
                <h1>College Registration Form</h1>
            </div>
            <div className="inputform fs-3 border  border-dark d-flex justify-content-center">
                <form className="w-50 p-5">
                    <div>

                        <label htmlfor="username" className="form-label mt-3">User Name</label>
                        <input type="text" className="form-control fs-5" name="username" placeholder="Enter username" value={user.username} onChange={handleInput} required />

                        <label htmlfor="firstname" className="form-label mt-3">First Name</label>
                        <input type="text" className="form-control fs-5" name="firstname" placeholder="Enter first name" value={user.firstname} onChange={handleInput} required />

                        <label htmlfor="middlename" className="form-label mt-3">Middle Name</label>
                        <input type="text" className="form-control fs-5" name="middlename" placeholder="Enter middle name" value={user.middlename} onChange={handleInput} required />

                        <label htmlfor="lastname" className="form-label mt-3">Last Name</label>
                        <input type="text" className="form-control fs-5" name="lastname" placeholder="Enter last name" value={user.lastname} onChange={handleInput} required />

                        <label htmlfor="email" className="form-label mt-3">Email</label>
                        <input type="email" className="form-control fs-5" name="email" placeholder="Enter email" value={user.email} onChange={handleInput} required />

                        <label htmlfor="roll" className="form-label mt-3">Roll No.</label>
                        <input type="text" className="form-control fs-5" name="roll" placeholder="Enter roll no" value={user.roll} onChange={handleInput} required />

                        <label htmlfor="course" className="form-label mt-3">course</label>
                        <input type="text" className="form-control fs-5 " name="course" placeholder="Enter course" value={user.course} onChange={handleInput} required />


                        <label htmlfor="branch" className="form-label mt-3">Branch</label>
                        <input type="text" className="form-control fs-5" name="branch" placeholder="Enter branch" value={user.branch} onChange={handleInput} required />

                        <label htmlfor="desc" className="form-label mt-3 " >Description</label>
                        <input type="text" className="form-control fs-5" name="desc" placeholder="About yourself" value={user.desc} onChange={handleInput} required />

                        <label htmlfor="password" className="form-label mt-3">Password</label>
                        <input type="password" className="form-control fs-5" name="password" placeholder="Enter password" value={user.password} onChange={handleInput} required />
                         
                    <button type="submit" className="btn btn-primary fs-5" style={{display:"block", margin:"10px auto", padding:10 }} onClick={handleSubmit}>Register</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        {data && <Detail res={data} />}
    </>)
};
