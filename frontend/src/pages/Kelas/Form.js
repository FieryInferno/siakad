import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {
  createKelas, retrieveDetailKelas, updateKelas,
} from '../../actions/kelas';
import {useHistory, useParams} from 'react-router-dom';

export const FormKelas = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    kode: '',
    nama: '',
  });
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(retrieveDetailKelas(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateKelas(values) : createKelas(values))
        .then(() => history.push('/data_master/kelas'))
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

export default FormKelas;
