import React from 'react';

import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    <span className="text-light">Vialo</span>
                    {/* Insert Logo inside an img tag */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            <div className = "underline"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                            <div className = "underline"></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                            <div className = "underline"></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default NavBar;