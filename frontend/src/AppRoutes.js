import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Spinner from './shared/Spinner';
import {useSelector} from 'react-redux';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Sekolah = lazy(() => import('./pages/Sekolah'));
const Test = lazy(() => import('./pages/Test'));

const Siswa = lazy(() => import('./pages/Siswa/index'));
const FormSiswa = lazy(() => import('./pages/Siswa/Form'));

const Guru = lazy(() => import('./pages/Guru/index'));
const FormGuru = lazy(() => import('./pages/Guru/Form'));

const MataPelajaran = lazy(() => import('./pages/MataPelajaran/index'));
const FormMataPelajaran = lazy(() => import('./pages/MataPelajaran/Form'));

const Kelas = lazy(() => import('./pages/Kelas/index'));
const FormKelas = lazy(() => import('./pages/Kelas/Form'));

const Jurusan = lazy(() => import('./pages/Jurusan/index'));
const FormJurusan = lazy(() => import('./pages/Jurusan/Form'));

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
            <Route exact path="/sekolah" component={ Sekolah } />

            <Route exact path="/siswa" component={ Siswa } />
            <Route exact path="/siswa/tambah" component={ FormSiswa } />
            <Route exact path="/siswa/edit/:id" component={ FormSiswa } />

            <Route exact path="/guru" component={ Guru } />
            <Route exact path="/guru/tambah" component={ FormGuru } />
            <Route exact path="/guru/edit/:id" component={ FormGuru } />

            <Route exact path="/data_master/jurusan" component={ Jurusan } />
            <Route
              exact path="/data_master/jurusan/tambah" component={ FormJurusan }
            />
            <Route
              exact
              path="/data_master/jurusan/edit/:id" component={ FormJurusan }
            />

            <Route exact path="/data_master/kelas" component={ Kelas } />
            <Route
              exact path="/data_master/kelas/tambah" component={ FormKelas }
            />
            <Route
              exact path="/data_master/kelas/edit/:id" component={ FormKelas }
            />

            <Route
              exact
              path="/data_master/mata_pelajaran" component={ MataPelajaran } />
            <Route
              exact
              path="/data_master/mata_pelajaran/tambah"
              component={ FormMataPelajaran }
            />
            <Route
              exact
              path="/data_master/mata_pelajaran/edit/:id"
              component={ FormMataPelajaran }
            />

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
