import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveSiswa} from '../../actions/siswa';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';

export const Siswa = () => {
  const dispatch = useDispatch();
  const siswa = useSelector((state) => state.siswa);

  useEffect(() => {
    dispatch(retrieveSiswa())
        .catch((e) => console.log(e));
  }, []);

  return (
    <ContentHolder
      button={
        <Link
          className="btn btn-primary btn-rounded btn-fw"
          to={'/siswa/tambah'}
        >
          <i className="mdi mdi-account-multiple-plus"></i>
          Tambah
        </Link>
      }
      content={
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
                      src={require('../../assets/images/faces/face1.jpg')}
                      alt="user icon" />
                  </td>
                  <td> {siswa.nim} </td>
                  <td> {siswa.nama} </td>
                  <td> {siswa.tempat_lahir} </td>
                  <td> {siswa.tanggal_lahir} </td>
                  <td> {siswa.agama?.nama} </td>
                  <td> {siswa.rombel?.nama} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    />
  );
};

export default Siswa;
