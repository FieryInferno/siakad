import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveSiswa} from '../actions/siswa';

export const Siswa = () => {
  const dispatch = useDispatch();
  const siswa = useSelector((state) => state.siswa);

  console.log(siswa);

  useEffect(() => {
    dispatch(retrieveSiswa());
  }, []);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Data Siswa </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Siswa
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> No </th>
                      <th> Foto </th>
                      <th> NIM </th>
                      <th> Nama </th>
                      <th> Tempat Lahir </th>
                      <th> Tanggal Lahir </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="py-1">
                        <img
                          src={require('../assets/images/faces/face1.jpg')}
                          alt="user icon" />
                      </td>
                      <td> 10104019 </td>
                      <td> Herman Beck </td>
                      <td> $ 77.99 </td>
                      <td> May 15, 2015 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siswa;
