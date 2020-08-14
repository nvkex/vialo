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
                            <li><a href="/">Why Vialo</a></li>
                            <li><a href="/">Inspiration</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Company</h6>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Jobs</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Resources</h6>
                        <ul>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Safety</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Feedback</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h6>Policies</h6>
                        <ul>
                            <li><a href="/">Terms</a></li>
                            <li><a href="/">Privacy</a></li>
                        </ul>
                    </div>

                </div>
                <hr style={{ backgroundColor: 'grey', width: '83%' }} />
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Vialo</h4>
                    </div>

                    <div className="col-sm-6">
                        <h4 className="text-right">Open Vialo</h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
