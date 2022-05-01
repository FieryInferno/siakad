import {combineReducers} from 'redux';
import login from './login';
import siswa from './siswa';
import agama from './agama';

export default combineReducers({login, siswa, agama});
