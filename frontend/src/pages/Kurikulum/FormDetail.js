import React, {useEffect, useState} from 'react';
import ContentHolder from '../../component/ContentHolder';
import SiakadForm from '../../component/SiakadForm';
import {useDispatch, useSelector} from 'react-redux';
import {createDetailKurikulum} from '../../actions/detailKurikulum';
import {
  retrieveDetailKurikulum, retrieveKurikulum,
} from '../../actions/kurikulum';
import {useHistory, useParams} from 'react-router-dom';
import {retrieveMataPelajaran} from '../../actions/mataPelajaran';
import {retrieveJurusan} from '../../actions/jurusan';

export const FormDetailDetailKurikulum = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mataPelajaran = useSelector((state) => state.mataPelajaran);
  const kurikulum = useSelector((state) => state.kurikulum);
  const jurusan = useSelector((state) => state.jurusan);
  const {id} = useParams();
  const [values, setValues] = useState({
    kurikulumId: '',
    mataPelajaranId: '',
    jurusanId: '',
    kelas: '',
  });

  const onSubmit = () => {
    dispatch(createDetailKurikulum(values))
        .then(() => history.goBack())
        .catch((e) => console.log(e));
  };

  useEffect(() => {
    dispatch(retrieveMataPelajaran()).catch((e) => console.log(e));
    dispatch(retrieveKurikulum()).catch((e) => console.log(e));
    dispatch(retrieveJurusan()).catch((e) => console.log(e));

    dispatch(retrieveDetailKurikulum(id))
        .then((data) => setValues({
          ...values,
          kurikulumId: data.id,
        }))
        .catch((e) => console.log(e));
  }, []);

  return (
    <ContentHolder title={'Tambah Detail Kurikulum'} options={[
      'Dashboard', 'Kurikulum', 'Detail', 'Tambah',
    ]}>
      <SiakadForm
        formContent={[
          {
            id: 'kurikulumId',
            label: 'Nama Kurikulum',
            type: 'text',
            value: values?.kurikulumId,
            disabled: true,
            type: 'select',
            data: kurikulum,
          },
          {
            id: 'mataPelajaranId',
            label: 'Nama Mata Pelajaran',
            type: 'text',
            placeholder: 'Masukan Nama Mata Pelajaran',
            onChange: (e) => setValues({
              ...values,
              mataPelajaranId: e.target.value,
            }),
            value: values?.mataPelajaranId,
            type: 'select',
            data: mataPelajaran,
          },
          {
            id: 'jurusanId',
            label: 'Nama Jurusan',
            type: 'text',
            placeholder: 'Masukan Nama Jurusan',
            onChange: (e) => setValues({
              ...values,
              jurusanId: e.target.value,
            }),
            value: values?.jurusanId,
            type: 'select',
            data: jurusan,
          },
          {
            id: 'kelas',
            label: 'Nama Kelas',
            type: 'select',
            placeholder: 'Masukan Nama Kelas',
            onChange: (e) => setValues({
              ...values,
              kelas: e.target.value,
            }),
            value: values?.kelas,
            type: 'select',
            data: [
              {
                id: '1',
                nama: 'KELAS 1',
              },
              {
                id: '2',
                nama: 'KELAS 2',
              },
              {
                id: '3',
                nama: 'KELAS 3',
              },
            ],
          },
        ]}
        onSubmit={onSubmit}
      />
    </ContentHolder>
  );
};

export default FormDetailDetailKurikulum;
