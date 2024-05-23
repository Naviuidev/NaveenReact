import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName && password) {
            // Retrieve signup details from local storage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && userName === storedUser.userName && password === storedUser.password) {
                setUser(userName);
                setUserName('');
                setPassword('');
                navigate('/');
            } else {
                setError('Invalid Credentials');
            }
        } else {
            setError('Please fill all the fields');
        }
    };

    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="my-2 p-3">
                                <h4 className="text-dark text-start">Login</h4>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="fs-6 mt-3">User Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control rounded-0 mb-2"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)} 
                                        />
                                    </div>
                                    <div>
                                        <label className="fs-6 mt-3">Password</label>
                                        <input
                                            type="password"
                                            required
                                            className="form-control rounded-0 mb-2"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button className="btn btn-primary px-4 py-1 rounded-0 border-0" type="submit">Login</button>
                                    {error && <p>{error}</p>}
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0">
                            <div className="loginBg">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
