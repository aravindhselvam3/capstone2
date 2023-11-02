import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import auth from '../services/auth';
import { useUser } from '../UserContext';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useUser();

  const fetchUserProfile = async () => {
    try {
      console.log("fetching user name...");
      const response = await fetch("https://backend-fw87.onrender.com/api/users/list");
      const body = await response.json();

      if (response.status === 200) {
        const user = body.find(user => user.email === email);
        if (user) {
          console.log(user.name);
          setUser(user.name);
        } 
      } else {
        console.log('Failed to fetch user profile');
      }
    } catch (error) {
      console.log('Failed to fetch user profile');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const status = await auth.signin({ email, password });

    if (status) {
      fetchUserProfile();
      navigate('/ZenClass');
    } else {
      setError('Invalid User');
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated()) {
      fetchUserProfile();
    }
  }, []);

  return (
    <div className="row" style={{ marginTop: "150px", marginLeft: "200px" }}>
      <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-2">
              <label htmlFor="email" className="label-style mb-0">Email</label>
              <input
                className="form-control"
                name="email" style={{ "width": "350px" }}
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
                name="password"
                placeholder="Your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ "width": "350px" }}
              />
            </div>
            <button type="submit" className="b col-md-12 btn btn-lg btn-block login-btn mt-4 mb-4">Login</button>
            {error && <p className="text-danger">{error}</p>} {/* Display error message */}
            <p>
              Don't you have an Account <Link to='/signup'>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
