import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {
  createJurusan, retrieveDetailJurusan, updateJurusan,
} from '../../actions/jurusan';
import {useHistory, useParams} from 'react-router-dom';

export const FormJurusan = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    kode: '',
    nama: '',
  });
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(retrieveDetailJurusan(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateJurusan(values) : createJurusan(values))
        .then(() => history.push('/data_master/jurusan'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder title={'Tambah Jurusan'} options={[
      'Dashboard', 'Jurusan', 'Tambah',
    ]}>
      <SiakadForm
        formContent={[
          {
            id: 'kode',
            label: 'Kode Jurusan',
            type: 'text',
            placeholder: 'Masukan Kode Jurusan',
            onChange: (e) => setValues({
              ...values,
              kode: e.target.value,
            }),
            value: values?.kode,
          },
          {
            id: 'nama',
            label: 'Nama Jurusan',
            type: 'text',
            placeholder: 'Masukan Nama Jurusan',
            onChange: (e) => setValues({
              ...values,
              nama: e.target.value,
            }),
            value: values?.nama,
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormJurusan;
