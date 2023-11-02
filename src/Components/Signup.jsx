import React, { useState } from 'react';
import auth from '../services/auth';
import { Link } from 'react-router-dom';
import './login.css'; 

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();

        auth.signup({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div style={{marginLeft: "250px", marginTop: "150px"}}>
            <h3>Register</h3>

            <form onSubmit={handleSignUp} className="col-md-6"> 
                <div className="form-group mt-2"> 
                    <label htmlFor="name" className="label-style mb-0">Name</label>
                    <input
                        className="form-control"
                        name="name" style={{"width": "350px"}}
                        placeholder="Your name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email" className="label-style mb-0">Email</label>
                    <input
                        className="form-control"
                        name="email" style={{"width": "350px"}}
                        placeholder="Example: johndoe@mail.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group mt-1"> 
                    <label htmlFor="password" className="label-style mb-0">Password</label>
                    <input
                        className="form-control"
                        name="password" style={{"width": "350px"}}
                        placeholder="Your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="col-md-12 btn btn-lg btn-block login-btn mt-4 mb-4">Sign Up</button> 
            </form>
            <p>
                Already Registered? <Link to='/signin'>Sign In</Link>
            </p>
        </div>
    )
}

export default SignUp;
