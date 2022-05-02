import {
  RETRIEVE_SISWA, CREATE_SISWA, DELETE_SISWA,
  RETRIEVE_DETAIL_SISWA,
} from './types';
import dataService from '../services/siswaService';

export const retrieveSiswa = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_SISWA,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailSiswa = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_SISWA,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createSiswa = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_SISWA,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteSiswa = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteSiswa(id);
    dispatch({
      type: DELETE_SISWA,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
