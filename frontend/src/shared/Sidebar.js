import React from 'react';
import {withRouter} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import {Trans} from 'react-i18next';
import {useSelector} from 'react-redux';
import Menu from '../component/Menu';

const Sidebar = (props) => {
  const user = useSelector((state) => state.login);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-xs rounded-circle "
                  src={require('../assets/images/faces/face15.jpg')}
                  alt="profile" />
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">
                  <Trans>{user?.name}</Trans></h5>
                <span><Trans>{user?.role}</Trans></span>
              </div>
            </div>
            <Dropdown alignRight>
              <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                <i className="mdi mdi-dots-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className="sidebar-dropdown preview-list">
                <a
                  href="!#"
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      <Trans>Account settings</Trans></p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a
                  href="!#"
                  className="dropdown-item preview-item"
                  onClick={(evt) => evt.preventDefault()}>
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      <Trans>Change Password</Trans></p>
                  </div>
                </a>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link"><Trans>Navigation</Trans></span>
        </li>
        <Menu
          content={[
            {
              path: '/dashboard',
              icon: <i className="mdi mdi-speedometer"></i>,
              title: 'Dashboard',
            },
            {
              path: '/siswa',
              icon: <i className="mdi mdi-laptop"></i>,
              title: 'Siswa',
            },
            {
              path: '/guru',
              icon: <i className="mdi mdi-playlist-play"></i>,
              title: 'Guru',
            },
          ]}
        />
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
