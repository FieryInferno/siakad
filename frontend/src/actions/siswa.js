import {RETRIEVE_SISWA} from './types';
import dataService from '../services/siswaService';

export const retrieveSiswa = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_SISWA,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
