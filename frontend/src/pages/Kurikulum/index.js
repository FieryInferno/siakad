import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveKurikulum, deleteKurikulum} from '../../actions/kurikulum';
import {Link} from 'react-router-dom';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';

export const Kurikulum = () => {
  const dispatch = useDispatch();
  const kurikulum = useSelector((state) => state.kurikulum);

  useEffect(() => {
    dispatch(retrieveKurikulum())
        .catch((e) => console.log(e));
  }, []);

  const removeKurikulum = (id) => {
    dispatch(deleteKurikulum(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder title={'Data Kurikulum'} options={[
      'Dashboard', 'Kurikulum',
    ]}>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={'/data_master/kurikulum/tambah'}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Nama Kurikulum </th>
              <th> Is Aktif </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {kurikulum.map((kurikulum, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {kurikulum.nama} </td>
                <td> {kurikulum.isAktif === 'y' ? 'Ya' : 'Tidak'} </td>
                <td>
                  <Link
                    className="btn btn-success btn-rounded"
                    to={`/data_master/kurikulum/edit/${kurikulum.id}`}
                  >
                    <i className=' mdi mdi-pencil'></i>
                  </Link>
                  <Link
                    className="btn btn-primary btn-rounded"
                    to={`/data_master/kurikulum/detail/${kurikulum.id}`}
                  >
                    <i className=' mdi mdi-eye'></i>
                  </Link>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeKurikulum(kurikulum.id)}
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

export default Kurikulum;
