import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext';

function Header() {
  const { user } = useUser();
  console.log(user)

  return (
    <div>
      <header className="p-3 mb-3 border-bottom" style={{ height: 70, width: '100%' }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4>Student Dashboard</h4>
            </div>

            <div className="d-flex align-items-center">
              {user ? (
                <h6 style={{ marginRight: '10px' }}>{user}</h6>
              ) : (
                <h6 style={{ marginRight: '10px' }}>Welcome</h6>
              )}
              <Link to="/signin">
                <div className="dropdown text-end">
                <div data-bs-toggle="tooltip" data-bs-placement="top" title="Logout" id="logoutBtn">

                  <img
                    src='https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png'
                    alt="pic"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
