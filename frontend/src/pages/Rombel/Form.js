import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch, useSelector} from 'react-redux';
import {
  createRombel, retrieveDetailRombel, updateRombel,
} from '../../actions/rombel';
import {retrieveJurusan} from '../../actions/jurusan';
import {useHistory, useParams} from 'react-router-dom';

export const FormRombel = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    nama: '',
    kelas: '',
    jurusanId: '',
  });
  const history = useHistory();
  const {id} = useParams();
  const jurusan = useSelector((state) => state.jurusan);

  useEffect(() => {
    dispatch(retrieveJurusan());

    if (id) {
      dispatch(retrieveDetailRombel(id))
          .then((data) => setValues(data))
          .catch((e) => console.log(e));
    }
  }, []);

  const onSubmit = () => {
    dispatch(id ? updateRombel(values) : createRombel(values))
        .then(() => history.push('/data_master/rombel'))
        .catch((e) => console.log(e));
  };

  return (
    <ContentHolder>
      <SiakadForm
        formContent={[
          {
            id: 'nama',
            label: 'Nama Rombel',
            type: 'text',
            placeholder: 'Masukan Nama Rombel',
            onChange: (e) => setValues({
              ...values,
              nama: e.target.value,
            }),
            value: values?.nama,
          },
          {
            id: 'kelas',
            label: 'Kelas',
            type: 'text',
            placeholder: 'Masukan Kelas',
            onChange: (e) => setValues({
              ...values,
              kelas: e.target.value,
            }),
            value: values?.kelas,
          },
          {
            id: 'jurusan',
            label: 'Jurusan',
            type: 'select',
            placeholder: 'Masukan Jurusan',
            data: jurusan,
            onChange: (e) => setValues({
              ...values,
              jurusanId: e.target.value,
            }),
            value: values?.jurusanId,
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormRombel;
