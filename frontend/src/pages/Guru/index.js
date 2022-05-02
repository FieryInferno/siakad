import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveGuru, deleteGuru} from '../../actions/guru';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Guru = () => {
  const dispatch = useDispatch();
  const guru = useSelector((state) => state.guru);

  useEffect(() => {
    dispatch(retrieveGuru())
        .catch((e) => console.log(e));
  }, []);

  const removeGuru = (id) => {
    dispatch(deleteGuru(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/guru/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> NUPTK </th>
              <th> Nama </th>
              <th> Gender </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {guru.map((guru, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {guru.nuptk} </td>
                <td> {guru.user.nama} </td>
                <td> {guru.gender} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/guru/${guru.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeGuru(guru.id)}
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

export default Guru;
