import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Spinner from './shared/Spinner';
import {useSelector} from 'react-redux';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Test = lazy(() => import('./pages/Test'));
// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
// const Typography = lazy(() => import('./basic-ui/Typography'));

// const BasicElements = lazy(() => import('./form-elements/BasicElements'));

// const BasicTable = lazy(() => import('./tables/BasicTable'));

// const Mdi = lazy(() => import('./icons/Mdi'));

// const ChartJs = lazy(() => import('./charts/ChartJs'));

// const Error404 = lazy(() => import('./error-pages/Error404'));
// const Error500 = lazy(() => import('./error-pages/Error500'));

// const Register1 = lazy(() => import('./user-pages/Register'));


const AppRoutes = (props) => {
  const login = useSelector((state) => state.login);

  console.log(login);

  return (
    <Suspense fallback={<Spinner/>}>
      <Switch>
        <Route path="/test" component={ Test } />
        {login ? (
          <>
            <Route path="/dashboard" component={ Dashboard } />
            <Redirect from='/' to="/dashboard" />
            <Redirect from='/login' to="/dashboard" />
          </>
        ) : (
          <>
            <Route path="/login" component={ Login } />
            <Redirect from='*' to="/login" />
          </>
        )}
        {/* <Route path="/basic-ui/buttons" component={ Buttons } />
        <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
        <Route path="/basic-ui/typography" component={ Typography } />

        <Route
          path="/form-Elements/basic-elements" component={ BasicElements } />

        <Route path="/tables/basic-table" component={ BasicTable } />

        <Route path="/icons/mdi" component={ Mdi } />

        <Route path="/charts/chart-js" component={ ChartJs } /> */}


        {/* <Route path="/user-pages/register-1" component={ Register1 } />

        <Route path="/error-pages/error-404" component={ Error404 } />
        <Route path="/error-pages/error-500" component={ Error500 } /> */}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
