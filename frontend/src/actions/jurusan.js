import {
  RETRIEVE_JURUSAN, CREATE_JURUSAN, DELETE_JURUSAN,
  RETRIEVE_DETAIL_JURUSAN, UPDATE_JURUSAN,
} from './types';
import dataService from '../services/jurusanService';

export const retrieveJurusan = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_JURUSAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailJurusan = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_JURUSAN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createJurusan = (payload) => async (dispatch) => {
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

export const updateJurusan = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_JURUSAN,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteJurusan = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteJurusan(id);
    dispatch({
      type: DELETE_JURUSAN,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
