import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './scss/style.scss';

const App = () => {
  const Login = React.lazy(() => import('./views/pages/Login'));
  const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
  const login = JSON.parse(localStorage.getItem('login'));
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name={login ? 'Dashboard' : 'Login'}
            render={(props) => {
              return login ?
              <DefaultLayout {...props} /> :
              <Login {...props} />;
            }}
          />
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <Login {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
