import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch, useSelector} from 'react-redux';
import {retrieveAgama} from '../../actions/agama';
import {retrieveRombel} from '../../actions/rombel';
import {
  createSiswa, retrieveDetailSiswa, updateSiswa,
} from '../../actions/siswa';
import {useHistory, useParams} from 'react-router-dom';

export const FormSiswa = () => {
  const dispatch = useDispatch();
  const agama = useSelector((state) => state.agama);
  const rombel = useSelector((state) => state.rombel);
  const [values, setValues] = useState();
  const history = useHistory();
  const {id} = useParams();

  console.log(id);

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
            id: 'nim',
            label: 'NIM',
            type: 'text',
            placeholder: 'Masukan NIM',
            onChange: (e) => setValues({
              ...values,
              nim: e.target.value,
            }),
            value: values?.nim,
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
            id: 'tempatLahir',
            label: 'Tempat Lahir',
            type: 'text',
            placeholder: 'Masukan Tempat Lahir',
            onChange: (e) => setValues({
              ...values,
              tempat_lahir: e.target.value,
            }),
            value: values?.tempat_lahir,
          },
          {
            id: 'tanggalLahir',
            label: 'Tanggal Lahir',
            type: 'date',
            placeholder: 'Masukan Tanggal Lahir',
            onChange: (e) => setValues({
              ...values,
              tanggal_lahir: e.target.value,
            }),
            value: values?.tanggal_lahir,
          },
          {
            id: 'agama',
            label: 'Agama',
            type: 'select',
            placeholder: 'Masukan Agama',
            data: agama,
            onChange: (e) => setValues({
              ...values,
              agamaId: e.target.value,
            }),
            value: values?.agamaId,
          },
          {
            id: 'rombel',
            label: 'Rombongan Belajar',
            type: 'select',
            placeholder: 'Masukan Rombongan Belajar',
            data: rombel,
            onChange: (e) => setValues({
              ...values,
              rombelId: e.target.value,
            }),
            value: values?.rombelId,
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormSiswa;
