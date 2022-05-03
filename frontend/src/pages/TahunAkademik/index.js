import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  retrieveTahunAkademik, deleteTahunAkademik,
} from '../../actions/tahunAkademik';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const TahunAkademik = () => {
  const dispatch = useDispatch();
  const tahunAkademik = useSelector((state) => state.tahunAkademik);

  useEffect(() => {
    dispatch(retrieveTahunAkademik())
        .catch((e) => console.log(e));
  }, []);

  const removeTahunAkademik = (id) => {
    dispatch(deleteTahunAkademik(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/tahun_akademik/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Tahun Akademik </th>
              <th> Is Aktif </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {tahunAkademik.map((tahunAkademik, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {tahunAkademik.tahunAkademik} </td>
                <td> {tahunAkademik.isAktif} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/tahun_akademik/edit/${tahunAkademik.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeTahunAkademik(tahunAkademik.id)}
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

export default TahunAkademik;
