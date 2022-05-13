import React from "react";
import './header.scss'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h4 className="header-text">Book Management</h4>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <span className="profile">Profile</span>
            <div className="dropdown">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header;