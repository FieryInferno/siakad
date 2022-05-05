import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch} from 'react-redux';
import {
  createKurikulum, retrieveDetailKurikulum, updateKurikulum,
} from '../../actions/kurikulum';
import {useHistory, useParams} from 'react-router-dom';

export const FormKurikulum = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    isAktif: '',
    nama: '',
  });
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(retrieveDetailKurikulum(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateKurikulum(values) : createKurikulum(values))
        .then(() => history.push('/data_master/jurusan'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'nama',
            label: 'Nama Kurikulum',
            type: 'text',
            placeholder: 'Masukan Nama Kurikulum',
            onChange: (e) => setValues({
              ...values,
              nama: e.target.value,
            }),
            value: values?.nama,
          },
          {
            id: 'isAktif',
            label: 'Is Aktif',
            type: 'select',
            placeholder: 'Masukan Is Aktif',
            onChange: (e) => setValues({
              ...values,
              isAktif: e.target.value,
            }),
            value: values?.isAktif,
            data: [
              {
                id: 'y',
                nama: 'Ya',
              },
              {
                id: 't',
                nama: 'Tidak',
              },
            ],
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormKurikulum;
