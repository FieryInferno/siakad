import React, {useState} from 'react';
import {Link, useLocation, withRouter} from 'react-router-dom';
import {Collapse, Dropdown} from 'react-bootstrap';
import {Trans} from 'react-i18next';
import {useSelector} from 'react-redux';

const Sidebar = (props) => {
  const location = useLocation();
  const [formElementsMenuOpen] = useState(false);
  const [tablesMenuOpen] = useState(false);
  const [chartsMenuOpen] = useState(false);
  const [iconsMenuOpen] = useState(false);
  const [userPagesMenuOpen] = useState(false);
  const [errorPagesMenuOpen] = useState(false);
  const isPathActive = (path) => location.pathname.startsWith(path);
  const user = useSelector((state) => state.login);

  // toggleMenuState(menuState) {
  //   if (state[menuState]) {
  //     setState({[menuState] : false});
  //   } else if(Object.keys(state).length === 0) {
  //     setState({[menuState] : true});
  //   } else {
  //     Object.keys(state).forEach(i => {
  //       setState({[i]: false});
  //     });
  //     setState({[menuState] : true});
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (props.location !== prevProps.location) {
  //     onRouteChanged();
  //   }
  // }

  // onRouteChanged() {
  //   document.querySelector('#sidebar').classList.remove('active');
  //   Object.keys(state).forEach(i => {
  //     this.setState({[i]: false});
  //   });

  //   const dropdownPaths = [
  //     {path:'/apps', state: 'appsMenuOpen'},
  //     {path:'/basic-ui', state: 'basicUiMenuOpen'},
  //     {path:'/form-elements', state: 'formElementsMenuOpen'},
  //     {path:'/tables', state: 'tablesMenuOpen'},
  //     {path:'/icons', state: 'iconsMenuOpen'},
  //     {path:'/charts', state: 'chartsMenuOpen'},
  //     {path:'/user-pages', state: 'userPagesMenuOpen'},
  //     {path:'/error-pages', state: 'errorPagesMenuOpen'},
  //   ];

  //   dropdownPaths.forEach((obj => {
  //     if (this.isPathActive(obj.path)) {
  //       this.setState({[obj.state] : true})
  //     }
  //   }));
  // }

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
        <li
          className={isPathActive('/dashboard') ?
          'nav-item menu-items active' : 'nav-item menu-items' }>
          <Link className="nav-link" to="/dashboard">
            <span className="menu-icon">
              <i className="mdi mdi-speedometer"></i></span>
            <span className="menu-title"><Trans>Dashboard</Trans></span>
          </Link>
        </li>
        <li className={isPathActive('/siswa') ?
        'nav-item menu-items active' : 'nav-item menu-items' }>
          <Link className='nav-link' to="/siswa">
            <span className="menu-icon">
              <i className="mdi mdi-laptop"></i>
            </span>
            <span className="menu-title"><Trans>Siswa</Trans></span>
          </Link>
        </li>
        <li
          className={isPathActive('/form-elements') ?
          'nav-item menu-items active' : 'nav-item menu-items' }>
          <div
            className={formElementsMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link' }
            onClick={() => toggleMenuState('formElementsMenuOpen')}
            data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-playlist-play"></i>
            </span>
            <span className="menu-title"><Trans>Form Elements</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ formElementsMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={isPathActive('/form-elements/basic-elements') ?
                    'nav-link active' :
                    'nav-link' } to="/form-elements/basic-elements">
                    <Trans>Basic Elements</Trans></Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li
          className={isPathActive('/tables') ?
          'nav-item menu-items active' : 'nav-item menu-items' }>
          <div
            className={ tablesMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link'}
            onClick={() => toggleMenuState('tablesMenuOpen')}
            data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-table-large"></i>
            </span>
            <span className="menu-title"><Trans>Tables</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ tablesMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className={ isPathActive('/tables/basic-table') ?
                  'nav-link active' :
                  'nav-link' }
                  to="/tables/basic-table">
                    <Trans>Basic Table</Trans></Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={isPathActive('/charts') ?
        'nav-item menu-items active' : 'nav-item menu-items' }>
          <div className={chartsMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link' }
          onClick={ () => toggleMenuState('chartsMenuOpen') }
          data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-chart-bar"></i>
            </span>
            <span className="menu-title"><Trans>Charts</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ chartsMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className={ isPathActive('/charts/chart-js') ?
                  'nav-link active' :
                  'nav-link' } to="/charts/chart-js">
                    <Trans>Chart Js</Trans></Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={ isPathActive('/icons') ?
        'nav-item menu-items active' : 'nav-item menu-items' }>
          <div className={ iconsMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link' }
          onClick={ () => toggleMenuState('iconsMenuOpen') }
          data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-contacts"></i>
            </span>
            <span className="menu-title"><Trans>Icons</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ iconsMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className={ isPathActive('/icons/mdi') ?
                  'nav-link active' : 'nav-link' } to="/icons/mdi">
                    <Trans>Material</Trans></Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={ isPathActive('/user-pages') ?
        'nav-item menu-items active' : 'nav-item menu-items' }>
          <div className={ userPagesMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link' }
          onClick={ () => toggleMenuState('userPagesMenuOpen') }
          data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-security"></i>
            </span>
            <span className="menu-title"><Trans>User Pages</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ userPagesMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className={ isPathActive('/user-pages/login-1') ?
                  'nav-link active' :
                  'nav-link' }
                  to="/user-pages/login-1"><Trans>Login</Trans></Link></li>
                <li className="nav-item">
                  <Link className={ isPathActive('/user-pages/register-1') ?
                  'nav-link active' :
                  'nav-link' }
                  to="/user-pages/register-1">
                    <Trans>Register</Trans></Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link"><Trans>More</Trans></span>
        </li>
        <li className={ isPathActive('/error-pages') ?
        'nav-item menu-items active' : 'nav-item menu-items' }>
          <div className={ errorPagesMenuOpen ?
            'nav-link menu-expanded' :
            'nav-link' } onClick={ () => toggleMenuState('errorPagesMenuOpen') }
          data-toggle="collapse">
            <span className="menu-icon">
              <i className="mdi mdi-lock"></i>
            </span>
            <span className="menu-title"><Trans>Error Pages</Trans></span>
            <i className="menu-arrow"></i>
          </div>
          <Collapse in={ errorPagesMenuOpen }>
            <div>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link className={ isPathActive('/error-pages/error-404') ?
                  'nav-link active' : 'nav-link' } to="/error-pages/error-404">
                    404</Link></li>
                <li className="nav-item">
                  <Link className={ isPathActive('/error-pages/error-500') ?
                    'nav-link active' : 'nav-link' }
                  to="/error-pages/error-500">500</Link></li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html" rel="noopener noreferrer" target="_blank">
            <span className="menu-icon">
              <i className="mdi mdi-file-document-box"></i>
            </span>
            <span className="menu-title"><Trans>Documentation</Trans></span>
          </a>
        </li>
      </ul>
    </nav>
  );

  // componentDidMount() {
  //   onRouteChanged();
  //   // add class 'hover-open'
  // to sidebar navitem while hover in sidebar-icon-only menu
  //   const body = document.querySelector('body');
  //   document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
  //     el.addEventListener('mouseover', function() {
  //       if(body.classList.contains('sidebar-icon-only')) {
  //         el.classList.add('hover-open');
  //       }
  //     });
  //     el.addEventListener('mouseout', function() {
  //       if(body.classList.contains('sidebar-icon-only')) {
  //         el.classList.remove('hover-open');
  //       }
  //     });
  //   });
  // }
};

export default withRouter(Sidebar);
