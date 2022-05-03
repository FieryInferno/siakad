import {
  RETRIEVE_TAHUN_AKADEMIK, CREATE_TAHUN_AKADEMIK, DELETE_TAHUN_AKADEMIK,
  RETRIEVE_DETAIL_TAHUN_AKADEMIK, UPDATE_TAHUN_AKADEMIK,
} from './types';
import dataService from '../services/tahunAkademikService';

export const retrieveTahunAkademik = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_TAHUN_AKADEMIK,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailTahunAkademik = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_TAHUN_AKADEMIK,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createTahunAkademik = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_TAHUN_AKADEMIK,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateTahunAkademik = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_TAHUN_AKADEMIK,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTahunAkademik = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteTahunAkademik(id);
    dispatch({
      type: DELETE_TAHUN_AKADEMIK,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
