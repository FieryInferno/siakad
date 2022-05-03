import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  retrieveKelas, deleteKelas,
} from '../../actions/kelas';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Kelas = () => {
  const dispatch = useDispatch();
  const kelas = useSelector((state) => state.kelas);

  useEffect(() => {
    dispatch(retrieveKelas())
        .catch((e) => console.log(e));
  }, []);

  const removeKelas = (id) => {
    dispatch(deleteKelas(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/kelas/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Kode Ruangan </th>
              <th> Nama Ruangan </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {kelas.map((kelas, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {kelas.kode} </td>
                <td> {kelas.nama} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/kelas/edit/${kelas.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeKelas(kelas.id)}
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

export default Kelas;
