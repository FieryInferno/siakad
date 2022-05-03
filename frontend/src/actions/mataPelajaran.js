import {
  RETRIEVE_MATA_PELAJARAN, CREATE_MATA_PELAJARAN, DELETE_MATA_PELAJARAN,
  RETRIEVE_DETAIL_MATA_PELAJARAN, UPDATE_MATA_PELAJARAN,
} from './types';
import dataService from '../services/mataPelajaranService';

export const retrieveMataPelajaran = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_MATA_PELAJARAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailMataPelajaran = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_MATA_PELAJARAN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createMataPelajaran = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_MATA_PELAJARAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateMataPelajaran = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_MATA_PELAJARAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteMataPelajaran = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteMataPelajaran(id);
    dispatch({
      type: DELETE_MATA_PELAJARAN,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
