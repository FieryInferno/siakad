import {combineReducers} from 'redux';
import login from './login';
import siswa from './siswa';
import agama from './agama';
import rombel from './rombel';

export default combineReducers({login, siswa, agama, rombel});
