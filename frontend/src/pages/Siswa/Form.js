import React, {useEffect} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveAgama} from '../../actions/agama';
import {retrieveRombel} from '../../actions/rombel';

export const FormSiswa = () => {
  const dispatch = useDispatch();
  const agama = useSelector((state) => state.agama);
  const rombel = useSelector((state) => state.rombel);

  useEffect(() => {
    dispatch(retrieveAgama());
    dispatch(retrieveRombel());
  }, []);

  return (
    <ContentHolder
      content={
        <SiakadForm
          formContent={[
            {
              id: 'nim',
              label: 'NIM',
              type: 'text',
              placeholder: 'Masukan NIM',
            },
            {
              id: 'nama',
              label: 'Nama',
              type: 'text',
              placeholder: 'Masukan Nama',
            },
            {
              id: 'tempatLahir',
              label: 'Tempat Lahir',
              type: 'text',
              placeholder: 'Masukan Tempat Lahir',
            },
            {
              id: 'tanggalLahir',
              label: 'Tanggal Lahir',
              type: 'date',
              placeholder: 'Masukan Tanggal Lahir',
            },
            {
              id: 'agama',
              label: 'Agama',
              type: 'select',
              placeholder: 'Masukan Agama',
              data: agama,
            },
            {
              id: 'rombel',
              label: 'Rombongan Belajar',
              type: 'select',
              placeholder: 'Masukan Rombongan Belajar',
              data: rombel,
            },
          ]}
        />
      }
    />
  );
};

export default FormSiswa;
