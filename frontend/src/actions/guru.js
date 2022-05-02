import {
  RETRIEVE_GURU, CREATE_GURU, DELETE_GURU,
  RETRIEVE_DETAIL_GURU, UPDATE_GURU,
} from './types';
import dataService from '../services/guruService';

export const retrieveGuru = () => async (dispatch) => {
  try {
    const res = await dataService.getAll();
    dispatch({
      type: RETRIEVE_GURU,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const retrieveDetailGuru = (id) => async (dispatch) => {
  try {
    const res = await dataService.get(id);
    dispatch({
      type: RETRIEVE_DETAIL_GURU,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createGuru = (payload) => async (dispatch) => {
  try {
    const res = await dataService.create(payload);
    dispatch({
      type: CREATE_GURU,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateGuru = (payload) => async (dispatch) => {
  try {
    const res = await dataService.update(payload);
    dispatch({
      type: UPDATE_GURU,
      payload: res.data,
    });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteGuru = (id) => async (dispatch) => {
  try {
    const res = await dataService.deleteGuru(id);
    dispatch({
      type: DELETE_GURU,
      payload: {id: id},
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
