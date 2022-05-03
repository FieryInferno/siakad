import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {
  createTahunAkademik, retrieveDetailTahunAkademik, updateTahunAkademik,
} from '../../actions/tahunAkademik';
import {useHistory, useParams} from 'react-router-dom';

export const FormTahunAkademik = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    kode: '',
    nama: '',
  });
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(retrieveDetailTahunAkademik(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateTahunAkademik(values) : createTahunAkademik(values))
        .then(() => history.push('/data_master/tahun_akademik'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'kode',
            label: 'Kode Tahun Akademik',
            type: 'text',
            placeholder: 'Masukan Kode Tahun Akademik',
            onChange: (e) => setValues({
              ...values,
              kode: e.target.value,
            }),
            value: values?.kode,
          },
          {
            id: 'nama',
            label: 'Nama Tahun Akademik',
            type: 'text',
            placeholder: 'Masukan Nama Tahun Akademik',
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

export default FormTahunAkademik;
