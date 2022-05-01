import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveSiswa} from '../actions/siswa';

export const Siswa = () => {
  const dispatch = useDispatch();
  const siswa = useSelector((state) => state.siswa);

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
                      <th> Agama </th>
                      <th> Rombel </th>
                    </tr>
                  </thead>
                  <tbody>
                    {siswa.map((siswa, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="py-1">
                          <img
                            src={require('../assets/images/faces/face1.jpg')}
                            alt="user icon" />
                        </td>
                        <td> {siswa.nim} </td>
                        <td> {siswa.nama} </td>
                        <td> {siswa.tempat_lahir} </td>
                        <td> {siswa.tanggal_lahir} </td>
                        <td> {siswa.agama.nama} </td>
                        <td> {siswa.rombel.nama} </td>
                      </tr>
                    ))}
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
