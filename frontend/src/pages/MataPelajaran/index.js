import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  retrieveMataPelajaran, deleteMataPelajaran,
} from '../../actions/mataPelajaran';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const MataPelajaran = () => {
  const dispatch = useDispatch();
  const mataPelajaran = useSelector((state) => state.mataPelajaran);

  useEffect(() => {
    dispatch(retrieveMataPelajaran())
        .catch((e) => console.log(e));
  }, []);

  const removeMataPelajaran = (id) => {
    dispatch(deleteMataPelajaran(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/mata_pelajaran/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Kode Mapel </th>
              <th> Mata Pelajaran </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {mataPelajaran.map((mataPelajaran, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {mataPelajaran.kodeMapel} </td>
                <td> {mataPelajaran.mataPelajaran} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/mata_pelajaran/edit/${mataPelajaran.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeMataPelajaran(mataPelajaran.id)}
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

export default MataPelajaran;
