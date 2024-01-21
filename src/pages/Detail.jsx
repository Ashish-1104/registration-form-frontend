import React from "react";

export const Detail = (data) => {
    return (<>
        <div className="mt-5 bg-light border border-2">
            <div className="d-flex justify-content-center mt-5"><h1 classname="">Detail</h1></div>
            <div className="fs-3 data  d-flex justify-content-center ">
                <ul className="w-75 ">
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">Username</p>
                        <p className="value d-inline">{data.res.username}</p>
                    </li>

                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">First Name</p>
                        <p className="value d-inline">{data.res.firstname}</p>
                    </li>

                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline" >Middle Name</p>
                        <p className="value d-inline">{data.res.middlename}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">Last Name</p>
                        <p className="value d-inline">{data.res.lastname}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">Email Name</p>
                        <p className="value d-inline">{data.res.email}</p>
                    </li>
                    <li className="d-flex justify-content-between" >
                        <p className="fw-bold tag d-inline">Roll No. </p>
                        <p className="value d-inline">{data.res.roll}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">Course</p>
                        <p className="value d-inline">{data.res.course}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold tag d-inline">Branch</p>
                        <p className="value d-inline">{data.res.branch}</p>
                    </li>
                    <li className="d-flex justify-content-between">
                        <p className="fw-bold  tag d-inline">Description</p>
                        <p className="value d-inline">{data.res.desc}</p>
                    </li>

                </ul>
            </div>
        </div>
    </>)
}
