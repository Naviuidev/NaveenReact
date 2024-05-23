import React from 'react';
import { useAuth } from '../../App';

const Navbar = () => {
    const { user , setUser } = useAuth();
    const handleLogout = () => {
        // Perform logout logic here (clear user from state or perform any cleanup)
        setUser(null); // Assuming setUser is a function to update the user state
    };
    console.log('User object:', user);


    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a>
                    
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        {user ? (
                            <li className="nav-item">
                                <span className="nav-link">Welcome {user}!</span>
                            </li>
                        ) : (
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="material-symbols-outlined mt-2">
                                        person
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Login">Login</a></li>
                                    <li><a className="dropdown-item" href="/Signup">Sign Up</a></li>
                                </ul>
                            </li>
                        )}
                        {user && (
                            <li className="nav-item">
                                <button className=" mt-1 btn btn-danger px-4 py-1 rounded-0 border-0" onClick={handleLogout}>Logout</button>
                            </li>
                        )}
                    </ul>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Test">Test</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Cards">Cards</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
