import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './scss/style.scss';

const App = () => {
  const Login = React.lazy(() => import('./views/pages/Login'));
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path='/' name={'Login'} element={<Login />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
