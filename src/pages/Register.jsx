import React, { useState } from "react"
export const Reg = () => {
    const [user, setUser] = useState({
        username: "vishal",
        firstname: "vishal",
        middlename: "patel",
        lastname: "singh",
        email: "vishu@gmail",
        gender: "1",
        course: "btech",
        branch: "cse",
        desc: "student",
        password: "12345"
    });

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
        console.log("submit")
        console.log(user);
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        console.log(response);
    }
    return (
        <>
            <section>

                <div cl assName="inputForm">
                    <div className="head">
                        Registration form
                    </div>
                    <form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter new username" id="username" value={user.username} onChange={handleInput} required />

                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" placeholder="Enter first name" id="firstname" value={user.firstname} onChange={handleInput} required />

                            <label htmlFor="middlename">Middle name</label>
                            <input type="text" name="middlename" placeholder=" Enter middle name" value={user.middlename} onChange={handleInput} id="middlename" required />


                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" placeholder="Enter last name" id="lastname" value={user.lastname} onChange={handleInput} required />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Enter email" id="email" value={user.email} onChange={handleInput} required />



                            <label htmlFor="gender">Gender</label>
                            <input type="text" name="gender" id="gender" value={user.gender} onChange={handleInput} required />

                            <label htmlFor="course">Course</label>
                            <input type="text" name="course" placeholder="Enter course" id="course" value={user.course} onChange={handleInput} required />

                            <label htmlFor="branch">Branch</label>
                            <input type="text" name="branch" placeholder="branch" id="branch" value={user.branch} onChange={handleInput} required />

                            <label htmlFor="desc">Discription</label>
                            <input type="text" name="desc" placeholder="Add about yourself" value={user.desc} onChange={handleInput} id="desc" required />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="Enter password" placeholder="password" id="password" value={user.password} onChange={handleInput} required />
                        </div>

                        <button type="submit" onclick={handleSubmit}>Register</button>
                    </form >
                </div >

            </section >
        </>

    )
};