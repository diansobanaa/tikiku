import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector} from 'react-redux';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div id="main">
        {/* header */}
        <div className="header-container">
          <div className="header-content">
            <div className="hamburger-wrapper left">
              <span className="hamburger-side-nav"></span>
              <span className="logo-container">
                <Link to="/">
                  <img src="logo"></img>
                </Link>
              </span>
            </div>
            <div className="header-menu right">
              <div className="upload-wrapper">
                <Link to="/upload">
                <svg className="upload-icon" width="37" height="37" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                </Link>
              </div>
              <div className="profile">
                <span className="tikiku-avatar-wrapper">
                  <img src="avatar" className="tikiku-avatar-header"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /header */}
        {/* body */}
        <div className="main-body fill-div-header middle">
          <div className="side-bar-container middle">
            <div className="sidebar-wrapper sidebar-scroll-container middle">
              <div className="sidebar-scroll-wrapper">
                <div className="sidebar-fixed">
                  <div className="nav-wrapper">
                    <Link to="/">
                      <svg className="home"></svg>
                      <span className="">HOME</span>
                    </Link>
                    <Link to="/following">
                      <svg className="following-icon"></svg>
                      <span className="">Following</span>
                    </Link>
                  </div>
                  <div className="user-list">
                    <div className="user-list-header">
                      <span>Suggested Account</span>
                    </div>
                    <div className="user-list-container">
                      {/* loop users here */}
                      <Link to="@user_id" className="user-item">
                        <div className="user-item-container">
                          <div className="user-avatar-container">
                            <img className="user-avatar"></img>
                          </div>
                          <div className="user-infos">
                            <div className="user-id">
                              <h4>User_ID</h4>
                              <svg className="checked_user"></svg>
                            </div>
                            <div className="real-name">
                              Real Name
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* /loop user here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contents-big-container">
            <div className="contents-layout">
              <div className="content-container">
                {/* loop contents here */}
                <div className="content-item-container">
                  <Link to="/@user_id" className="content-item-avatar">
                    <img src=""></img>
                  </Link>
                  <div className="content-item">
                    <div className="creator-content-info">
                      <Link to="/@user_id">
                        <h3 className="creator-user-id">User_ID</h3>
                      </Link>
                      <Link to="/@user_id">
                        <h4 className="creator-real-name">Real Name</h4>
                      </Link>
                    </div>
                    <div className="content-caption">
                      Caption Here @mention #hashtag
                    </div>
                    <div className="creator-follow-wrapper">
                      <button>FOLLOW</button>
                    </div>
                    <div className="item-music-used">
                      <h4>
                        <svg className="melody-icon"></svg>
                        <span>Music used</span>
                      </h4>
                    </div>
                    <div className="content-video-container">
                      <Link to="link-to-content" className="item-video-card-wrapper">
                        <div className="placeholder-content">
                          <div className="imageCard">
                            <video className="video-content" src="link-to-video"></video>
                            <span className="style-layer-maker"></span>
                            <div className="item-mute-icon-container">
                              <svg className="item-mute-icon"></svg>
                            </div>
                            <div className="toggle-icon-container">
                              <svg className="toggle-icon"></svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="report-content">
                        <div>
                          <svg className="report-icon"></svg>
                          <span>Report</span>
                        </div>
                      </div>
                    </div>
                    <div className="action-bar">
                      <div className="bar-item-wrapper">
                        <div className="bar-item-engagement">
                          <svg className="bar-item love-bar-img"></svg>
                        </div>
                        <strong>32k</strong>
                      </div>
                      <div className="bar-item-wrapper">
                        <div className="bar-item-engagement">
                          <svg className="bar-item comment-bar-img"></svg>
                        </div>
                        <strong>11k</strong>
                      </div>
                      <div className="bar-item-wrapper">
                        <div className="bar-item-engagement">
                          <svg className="bar-item share-bar-img"></svg>
                        </div>
                        <strong>1k</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* /loop contents here */}
              </div>
              <div className="right-rule">

              </div>
            </div>
          </div>
        </div>
        {/* /body */}
      </div>
    </Router>
  );
}

export default App;
