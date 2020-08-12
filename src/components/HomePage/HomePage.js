import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

import IL1 from '../../static/undraw_a_better_world_9xfd.svg';
import IL2 from '../../static/undraw_Popular_re_mlfe.svg';
import IL3 from '../../static/undraw_respond_8wjt.svg';
import IL4 from '../../static/undraw_Friends_online_re_r7pq.svg';


import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container-fluid intro">
                    <div className='row'>
                        <div className="col-sm-4">
                            <img src={IL1} alt="illustration1" className="illustration" />
                        </div>
                        <div className="col-sm-8">
                            <div className="container my-4">
                                <h1 className="display-4 text-white text-center"><b>Connect with the world</b></h1>
                                <p className="text-muted text-center vialo-desc">
                                    Vialo is a freeware instant messaging app primarily used to create communities for individuals, groups, businesses or just to hangout online.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <img src={IL2} alt="illustration2" className="illustration" />
                            </div>
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-4">
                                <h1 className="my-1">
                                    An invite-only place with plenty of room to talk
                                </h1>
                                <p className="text-muted my-4">
                                    Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <h1 className="my-1">
                                    Where hanging out is easy
                                </h1>
                                <p className="text-muted my-4">
                                    Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                                </p>
                            </div>
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-5">
                                <img src={IL3} alt="illustration3" className="illustration" />
                            </div>
                        </div>

                        <div className="row end-card">
                            <div className="col-12">
                                <h1 className="my-1 text-center">
                                    Reliable tech for staying close
                                </h1>
                                <p className="text-center text-muted">
                                    Gather up your friends.
                                </p>
                                <div className="end-img">
                                    <img src={IL4} alt="illustration4" className="illustration" />
                                </div>
                                <br />
                                <h2 className="text-center text-dark">Ready to start your journey?</h2>
                                <br />
                                <div className="text-center" >
                                    <a href="/signup">
                                        <button className="signup-btn">Sign Up</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
