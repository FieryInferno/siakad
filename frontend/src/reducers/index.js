import {combineReducers} from 'redux';
import login from './login';
import siswa from './siswa';
import agama from './agama';
import rombel from './rombel';
import guru from './guru';
import sekolah from './sekolah';
import mataPelajaran from './mataPelajaran';
import kelas from './kelas';
import jurusan from './jurusan';
import tahunAkademik from './tahunAkademik';
import kurikulum from './kurikulum';

export default combineReducers({
  login, siswa, agama, rombel, guru, sekolah,
  mataPelajaran, kelas, jurusan, tahunAkademik, kurikulum,
});
