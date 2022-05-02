import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {retrieveAgama} from '../../actions/agama';
import {retrieveRombel} from '../../actions/rombel';
import {
  createSiswa, retrieveDetailSiswa, updateSiswa,
} from '../../actions/siswa';
import {useHistory, useParams} from 'react-router-dom';

export const FormSiswa = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    dispatch(retrieveAgama());
    dispatch(retrieveRombel());

    if (id) {
      dispatch(retrieveDetailSiswa(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateSiswa(values) : createSiswa(values))
        .then(() => history.push('/siswa'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'nuptk',
            label: 'NUPTK',
            type: 'text',
            placeholder: 'Masukan NUPTK',
            onChange: (e) => setValues({
              ...values,
              nuptk: e.target.value,
            }),
            value: values?.nuptk,
          },
          {
            id: 'nama',
            label: 'Nama',
            type: 'text',
            placeholder: 'Masukan Nama',
            onChange: (e) => setValues({
              ...values,
              nama: e.target.value,
            }),
            value: values?.nama,
          },
          {
            id: 'gender',
            label: 'Gender',
            type: 'select',
            placeholder: 'Masukan Gender',
            onChange: (e) => setValues({
              ...values,
              gender: e.target.value,
            }),
            value: values?.gender,
            data: [
              {
                id: 'l',
                nama: 'Laki - laki',
              },
              {
                id: 'p',
                nama: 'Perempuan',
              },
            ],
          },
          {
            id: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'Masukan Username',
            onChange: (e) => setValues({
              ...values,
              username: e.target.value,
            }),
            value: values?.username,
          },
          {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Masukan Password',
            onChange: (e) => setValues({
              ...values,
              password: e.target.value,
            }),
            value: values?.password,
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormSiswa;
