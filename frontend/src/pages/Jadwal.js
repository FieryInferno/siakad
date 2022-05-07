import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveJadwal, createJadwal} from '../actions/jadwal';
import {retrieveJurusan} from '../actions/jurusan';
import {retrieveKelas} from '../actions/kelas';
import {retrieveRombel} from '../actions/rombel';
import ContentHolder from '../component/ContentHolder';
import {Button} from 'react-bootstrap';
import SiakadForm from '../component/SiakadForm';

export const Jadwal = () => {
  const dispatch = useDispatch();
  const jadwal = useSelector((state) => state.jadwal);
  const jurusan = useSelector((state) => state.jurusan);
  const kelas = useSelector((state) => state.kelas);
  const rombel = useSelector((state) => state.rombel);
  const [values, setValues] = useState({
    jurusanId: '',
    kelasId: '',
    rombelId: '',
  });

  useEffect(() => {
    dispatch(retrieveJurusan());
    dispatch(retrieveKelas());
    dispatch(retrieveRombel());

    dispatch(retrieveJadwal())
        .catch((e) => console.log(e));
  }, []);

  const removeJadwal = (id) => {
    dispatch(deleteJadwal(id))
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
  };

  const generateJadwal = () => {
    console.log(createJadwal);
  };

  return (
    <ContentHolder title={'Data Jadwal'} options={[
      'Dashboard', 'Jadwal',
    ]}>
      <SiakadForm
        formContent={[
          {
            id: 'jurusanId',
            label: 'Jurusan',
            type: 'select',
            placeholder: 'Masukan Jurusan',
            onChange: (e) => setValues({
              ...values,
              jurusanId: e.target.value,
            }),
            value: values?.jurusanId,
            data: jurusan,
          },
          {
            id: 'kelasId',
            label: 'Kelas',
            type: 'select',
            placeholder: 'Masukan Kelas',
            onChange: (e) => setValues({
              ...values,
              kelasId: e.target.value,
            }),
            value: values?.kelasId,
            data: kelas,
          },
          {
            id: 'rombelId',
            label: 'Rombel',
            type: 'select',
            placeholder: 'Masukan Rombel',
            onChange: (e) => setValues({
              ...values,
              rombelId: e.target.value,
            }),
            value: values?.rombelId,
            data: rombel,
          },
        ]}
      />
      <button className="btn btn-primary mr-2" onClick={generateJadwal}>
        Generate Jadwal
      </button>
      <button className="btn btn-dark" onClick={() => history.goBack()}>
        Cancel
      </button>
      <br/><br/><br/>
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
