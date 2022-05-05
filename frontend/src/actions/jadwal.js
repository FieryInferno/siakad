import {RETRIEVE_JADWAL} from './types';
import dataService from '../services/jadwalService';

export const retrieveJadwal = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({type: RETRIEVE_JADWAL,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createJadwal = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_JURUSAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
