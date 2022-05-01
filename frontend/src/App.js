import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import AppRoutes from './AppRoutes';
import {useLocation} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
// import {useSelector} from 'react-redux';

const App = () => {
  // const login = useSelector((state) => state.login);
  const [fullPage, setFullPage] = useState(true);
  const navbarComponent = fullPage ? '' : <Navbar/>;
  const sidebarComponent = fullPage ? '' : <Sidebar/>;
  const footerComponent = fullPage ? '' : <Footer/>;
  const location = useLocation();

  useEffect(() => {
    onRouteChanged();
  }, []);

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = () => {
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/error-404'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (location.pathname === fullPageLayoutRoutes[i]) {
        setFullPage(true);
        document.querySelector('.page-body-wrapper')
            .classList.add('full-page-wrapper');
        break;
      } else {
        setFullPage(false);
        document.querySelector('.page-body-wrapper')
            .classList.remove('full-page-wrapper');
      }
    }
  };

  return (
    <div className="container-scroller">
      { sidebarComponent }
      <div className="container-fluid page-body-wrapper">
        { navbarComponent }
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes/>
          </div>
          { footerComponent }
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
