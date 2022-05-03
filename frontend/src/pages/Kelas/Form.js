import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {
  createMataPelajaran, retrieveDetailMataPelajaran, updateMataPelajaran,
} from '../../actions/mataPelajaran';
import {useHistory, useParams} from 'react-router-dom';

export const FormMataPelajaran = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    kode: '',
    nama: '',
  });
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(retrieveDetailMataPelajaran(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateMataPelajaran(values) : createMataPelajaran(values))
        .then(() => history.push('/data_master/mata_pelajaran'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'kode',
            label: 'Kode Ruangan',
            type: 'text',
            placeholder: 'Masukan Kode Ruangan',
            onChange: (e) => setValues({
              ...values,
              kode: e.target.value,
            }),
            value: values?.kode,
          },
          {
            id: 'nama',
            label: 'Nama Ruangan',
            type: 'text',
            placeholder: 'Masukan Nama Ruangan',
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

export default FormMataPelajaran;
