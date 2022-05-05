import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveJadwal} from '../actions/jadwal';
import {Link} from 'react-router-dom';
import ContentHolder from '../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Jadwal = () => {
  const dispatch = useDispatch();
  const jadwal = useSelector((state) => state.jadwal);

  useEffect(() => {
    dispatch(retrieveJadwal())
        .catch((e) => console.log(e));
  }, []);

  const removeJadwal = (id) => {
    dispatch(deleteJadwal(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/jadwal/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Mata Pelajaran </th>
              <th> Guru </th>
              <th> Ruangan </th>
              <th> Hari </th>
              <th> Jam </th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((jadwal, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {jadwal.mataPelajaran?.nama} </td>
                <td> {jadwal.guru?.nama} </td>
                <td> {jadwal.kelas?.nama} </td>
                <td> {jadwal.hari} </td>
                <td> {jadwal.jadwal} </td>
                <td>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeJadwal(jadwal.id)}
                  >
                    <i className='mdi mdi-delete'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentHolder>
  );
};

export default Jadwal;
