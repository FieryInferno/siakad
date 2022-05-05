import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveRombel, deleteRombel} from '../../actions/rombel';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Rombel = () => {
  const dispatch = useDispatch();
  const rombel = useSelector((state) => state.rombel);

  useEffect(() => {
    dispatch(retrieveRombel())
        .catch((e) => console.log(e));
  }, []);

  const removeRombel = (id) => {
    dispatch(deleteRombel(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/rombel/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Kode Rombel </th>
              <th> Nama Rombel </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {rombel.map((rombel, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {rombel.kode} </td>
                <td> {rombel.nama} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/rombel/edit/${rombel.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeRombel(rombel.id)}
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

export default Rombel;
