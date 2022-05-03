import React, {useEffect, useState} from 'react';
import ContentHolder from '../component/ContentHolder';
import SiakadForm from '../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {retrieveSekolah, updateSekolah} from '../actions/sekolah';

export const FormSekolah = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();

  console.log(values);

  useEffect(() => {
    dispatch(retrieveSekolah())
        .then((data) => {
          console.log(data);
          setValues(data);
        })
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
            value: values?.nama,
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
            value: values?.alamat,
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
            label: 'Telepon',
            type: 'text',
            placeholder: 'Masukan Telepon',
            onChange: (e) => setValues({
              ...values,
              telepon: e.target.value,
            }),
            value: values?.telepon,
          },
          {
            id: 'jenjang',
            label: 'Jenjang',
            type: 'select',
            placeholder: 'Masukan Jenjang',
            onChange: (e) => setValues({
              ...values,
              jenjang: {
                ...values,
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
            value: values?.jenjang,
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormSekolah;
