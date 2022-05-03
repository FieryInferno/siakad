import React, {useEffect, useState} from 'react';
import ContentHolder from '../component/ContentHolder';
import SiakadForm from '../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {retrieveSekolah, updateSekolah} from '../actions/sekolah';

export const FormSekolah = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();

  useEffect(() => {
    dispatch(retrieveSekolah())
        .then((data) => setValues(data))
        .catch((e) => console.log(e));
  }, []);

  const onSubmit = () => {
    dispatch(updateSekolah(values))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'namaSekolah',
            label: 'Nama Sekolah',
            type: 'text',
            placeholder: 'Masukan Nama Sekolah',
            onChange: (e) => setValues({
              ...values,
              namaSekolah: e.target.value,
            }),
            value: values?.namaSekolah,
          },
          {
            id: 'alamatSekolah',
            label: 'Alamat Sekolah',
            type: 'text',
            placeholder: 'Masukan Alamat Sekolah',
            onChange: (e) => setValues({
              ...values,
              alamatSekolah: e.target.value,
            }),
            value: values?.alamatSekolah,
          },
          {
            id: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Masukan Email',
            onChange: (e) => setValues({
              ...values,
              email: e.target.value,
            }),
            value: values?.email,
          },
          {
            id: 'telepon',
            label: 'Username',
            type: 'text',
            placeholder: 'Masukan Username',
            onChange: (e) => setValues({
              ...values,
              telepon: e.target.value,
            }),
            value: values?.user.telepon,
          },
          {
            id: 'jenjang',
            label: 'Jenjang',
            type: 'select',
            placeholder: 'Masukan Jenjang',
            onChange: (e) => setValues({
              ...values,
              jenjang: {
                ...values?.user,
                jenjang: e.target.value,
              },
            }),
            data: [
              {
                id: 'sd',
                nama: 'SD/MI',
              },
              {
                id: 'smp',
                nama: 'SMP/MTs',
              },
              {
                id: 'sma',
                nama: 'SMA/SMK',
              },
            ],
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormSekolah;
