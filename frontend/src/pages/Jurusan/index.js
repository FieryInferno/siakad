import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  retrieveJurusan, deleteJurusan,
} from '../../actions/jurusan';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Jurusan = () => {
  const dispatch = useDispatch();
  const jurusan = useSelector((state) => state.jurusan);

  useEffect(() => {
    dispatch(retrieveJurusan())
        .catch((e) => console.log(e));
  }, []);

  const removeJurusan = (id) => {
    dispatch(deleteJurusan(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/jurusan/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Kode Jurusan </th>
              <th> Nama Jurusan </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {jurusan.map((jurusan, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {jurusan.kode} </td>
                <td> {jurusan.nama} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/jurusan/edit/${jurusan.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeJurusan(jurusan.id)}
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

export default Jurusan;
