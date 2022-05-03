import {
  RETRIEVE_KELAS, CREATE_KELAS, DELETE_KELAS,
  RETRIEVE_DETAIL_KELAS, UPDATE_KELAS,
} from './types';
import dataService from '../services/kelasService';

export const retrieveKelas = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_KELAS,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailKelas = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_KELAS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createKelas = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_KELAS,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateKelas = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_KELAS,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteKelas = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteKelas(id);
    dispatch({
      type: DELETE_KELAS,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
