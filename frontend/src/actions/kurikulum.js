import {
  RETRIEVE_KURIKULUM, CREATE_KURIKULUM, DELETE_KURIKULUM,
  RETRIEVE_DETAIL_KURIKULUM, UPDATE_KURIKULUM,
} from './types';
import dataService from '../services/kurikulumService';

export const retrieveKurikulum = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailKurikulum = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createKurikulum = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateKurikulum = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteKurikulum = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteKurikulum(id);
    dispatch({
      type: DELETE_KURIKULUM,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
