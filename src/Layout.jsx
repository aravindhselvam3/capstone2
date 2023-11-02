
import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import ZenClass from './Components/ZenClass';
import Tasks from './Components/Tasks';
import Webcode from './Components/Webcode';
import Capstone from './Components/Capstone';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import { useUser } from './UserContext';

export default function Layout({ userData }) {
  const location = useLocation();
  const { user } = useUser();

  const isLoginRoute = location.pathname === '/signin';
  const isSignupRoute = location.pathname === '/signup';

  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={isLoginRoute ? <Login /> : <Outlet />} />
      </Routes>

      {isLoginRoute || isSignupRoute ? (
        <div>
          <Outlet />
        </div>
      ) : user ? (
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Header />
            <main className="container">
              <Routes>
                <Route path="/ZenClass" element={<ZenClass />} />
                <Route path="/Tasks" element={<Tasks />} />
                <Route path="/Webcode" element={<Webcode />} />
                <Route path="/Capstone" element={<Capstone />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}
