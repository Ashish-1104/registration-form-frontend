import { NavLink } from "react-router-dom"
export const Navbar = () =>{
    return (
        <>
            <header >
                <div className = " bg-dark w-100 d-flex justify-content-end">
                    
                    <nav >
                        <ul className="d-flex " style={{listStyle:"none"}}>
                            <li><NavLink to="/" ><button className="btn btn-light m-2 fs-5 border-dark border-2 mt-3">Register</button></NavLink></li>
                            <li><NavLink to="/Login"><button className="btn btn-light m-2 fs-5 border-dark border-2 mt-3 ">Check</button></NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}