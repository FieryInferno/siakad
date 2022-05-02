import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Spinner from './shared/Spinner';
import {useSelector} from 'react-redux';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Test = lazy(() => import('./pages/Test'));

const Siswa = lazy(() => import('./pages/Siswa/index'));
const FormSiswa = lazy(() => import('./pages/Siswa/Form'));

const Guru = lazy(() => import('./pages/Guru/index'));
const FormGuru = lazy(() => import('./pages/Siswa/Form'));

const Error404 = lazy(() => import('./pages/Error404'));
const AppRoutes = (props) => {
  const login = useSelector((state) => state.login);

  return (
    <Suspense fallback={<Spinner/>}>
      <Switch>
        <Route exact path="/test" component={ Test } />
        {login ? (
          <>
            <Route exact path="/" component={ Dashboard } />
            <Route exact path="/dashboard" component={ Dashboard } />

            <Route exact path="/siswa" component={ Siswa } />
            <Route exact path="/siswa/tambah" component={ FormSiswa } />
            <Route exact path="/siswa/:id" component={ FormSiswa } />

            <Route exact path="/guru" component={ Guru } />
            <Route exact path="/guru/tambah" component={ FormGuru } />
            <Route exact path="/guru/:id" component={ FormGuru } />

            <Route exact path="/error-404" component={ Error404 } />
          </>
        ) : (
          <>
            <Route exact path="/login" component={ Login } />
            <Redirect from='*' to="/login" />
          </>
        )}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
