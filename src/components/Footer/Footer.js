import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid">
                <div className="row">

                    <div className="col-sm-4">
                        <h3><b>Your place to talk</b></h3>
                        <div className="social-list mb-2">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Youtube</p>
                            <p>Instagram</p>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <h6>Product</h6>
                        <ul>
                            <li><a>Why Vialo</a></li>
                            <li><a>Inspiration</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Company</h6>
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Jobs</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Resources</h6>
                        <ul>
                            <li><a>Support</a></li>
                            <li><a>Safety</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Feedback</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Policies</h6>
                        <ul>
                            <li><a>Terms</a></li>
                            <li><a>Privacy</a></li>
                        </ul>
                    </div>

                </div>
                <hr className="mx-4" style={{ backgroundColor: 'grey' }} />
                <div className="row">
                    Vialo
          </div>
            </footer>
        </div>
    )
}

export default Footer;
