import {
  RETRIEVE_DATA_DETAIL_KURIKULUM, CREATE_DETAIL_KURIKULUM,
  DELETE_DETAIL_KURIKULUM,
} from './types';
import dataService from '../services/kurikulumService';

export const retrieveDetailKurikulum = () => async (dispatch) => {
  try {
    const res = await dataService.getAllDetailKurikulum();
    dispatch({
      type: RETRIEVE_DATA_DETAIL_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createDetailKurikulum = (payload) => async (dispatch) => {
  try {
    const res = await dataService.createDetailKurikulum(payload);
    dispatch({
      type: CREATE_DETAIL_KURIKULUM,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteDetailKurikulum = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteDetailKurikulum(id);
    dispatch({
      type: DELETE_DETAIL_KURIKULUM,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
