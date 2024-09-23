import React from 'react';
import userIcon from './user-interface.png';
import loginIcon from './login.png';
import logoutIcon from './logout.png'; 
import './navigation.css'
const NavBar = () => {
  return (
    <nav>
      {/* <ul>
        <li><a href="#">Search</a></li>
        <li><a href="#">Driver account</a></li>
        <li><a href="#">Passenger account</a></li>
        <li><a href="#">About us</a></li>
      </ul> */}

      <div className="user">
        <details>
          <summary>
            <img src={userIcon} />
          </summary>
          <div className="list">
            <ul>
              <li>
                <a href="1#">
                  Login
                  <img src={loginIcon} alt="Login" />
                </a>
              </li>
              <li>
                <a href="#">
                  SIGN UP
                  <img src={logoutIcon} alt="Sign Up" />
                </a>
              </li>
              <li>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'center'
                }}>
                  <button
                    type="button"
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      margin: '10px',
                      color: 'var(--clr-text)',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      backgroundColor: 'transparent',
                      borderRadius: '0',
                      border: 'none',
                      cursor: 'grab',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '18px'
                    }}
                  >
                    Logout
                    <img src={logoutIcon}width="30" height="30" alt="Logout" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </nav>
  );
};

export default NavBar;
