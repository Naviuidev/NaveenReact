import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName || !email || !password || !confirmPassword || !gender) {
            setError('Please fill all the fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Save signup details to local storage
        localStorage.setItem('user', JSON.stringify({ userName, email, password, gender }));
        navigate('/login');
    };

    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="my-2 p-3">
                                <h4 className="text-dark text-start mt-3">SignUp</h4>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="fs-6 ">User Name</label>
                                        <input 
                                            type="text"
                                            required
                                            className="form-control rounded-0 "
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="fs-6 ">Email</label>
                                        <input 
                                            type="email"
                                            required
                                            className="form-control rounded-0 "
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="fs-6 ">Password</label>
                                        <input
                                            type="password"
                                            required
                                            className="form-control rounded-0 "
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="fs-6 ">Confirm Password</label>
                                        <input
                                            type="password"
                                            required
                                            className="form-control rounded-0 "
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="fs-6 ">Gender</label>
                                        <select
                                            required
                                            className="form-control rounded-0 "
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    {error && <div className="text-danger">{error}</div>}
                                    <button className="btn mt-2 btn-primary px-4 py-1  rounded-0 border-0" type="submit">SignUp</button>
                                </form>
                            </div>
                        </div>
                        {/* end of the first col */}
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 p-0">
                            <div className=" signupBg">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
