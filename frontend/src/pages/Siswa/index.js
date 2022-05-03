import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveSiswa, deleteSiswa} from '../../actions/siswa';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Siswa = () => {
  const dispatch = useDispatch();
  const siswa = useSelector((state) => state.siswa);

  useEffect(() => {
    dispatch(retrieveSiswa())
        .catch((e) => console.log(e));
  }, []);

  const removeSiswa = (id) => {
    dispatch(deleteSiswa(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/siswa/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
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
              <th> Aksi </th>
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
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/siswa/edit/${siswa.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeSiswa(siswa.id)}
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

export default Siswa;
