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
