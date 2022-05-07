import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  retrieveDetailKurikulum, deleteDetailKurikulum,
} from '../../actions/detailKurikulum';
import ContentHolder from '../../component/ContentHolder';
import {Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';

export const DetailKurikulum = () => {
  const dispatch = useDispatch();
  const detailKurikulum = useSelector((state) => state.detailKurikulum);
  const {id} = useParams();

  useEffect(() => {
    dispatch(retrieveDetailKurikulum())
        .catch((e) => console.log(e));
  }, []);

  const removeKurikulum = (id) => {
    dispatch(deleteDetailKurikulum(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder title={'Detail Kurikulum'} options={[
      'Dashboard', 'Kurikulum', 'Detail',
    ]}>
      <Link
        className="btn btn-primary btn-rounded btn-fw"
        to={`/data_master/kurikulum/detail/${id}/tambah`}
      >
        <i className="mdi mdi-account-multiple-plus"></i>
        Tambah
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th> No </th>
              <th> Jurusan </th>
              <th> Kode Mapel </th>
              <th> Mata Pelajaran </th>
              <th> Kelas </th>
              <th> Aksi </th>
            </tr>
          </thead>
          <tbody>
            {detailKurikulum.map((detailKurikulum, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {detailKurikulum.jurusan?.nama} </td>
                <td> {detailKurikulum.mataPelajaran?.kode} </td>
                <td> {detailKurikulum.mataPelajaran?.nama} </td>
                <td> {detailKurikulum.kelas} </td>
                <td>
                  <Button
                    className="btn btn-danger btn-rounded"
                    onClick={() => removeKurikulum(detailKurikulum.id)}
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

export default DetailKurikulum;
