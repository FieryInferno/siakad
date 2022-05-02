import {
  RETRIEVE_GURU, RETRIEVE_DETAIL_GURU, CREATE_GURU,
  DELETE_GURU, UPDATE_GURU,
} from '../actions/types';

const initialState = [];
const detailGuru = [];

const guruReducer = (
    guru = initialState, action,
    detail = detailGuru,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_GURU:
      return payload;
    case CREATE_GURU:
      return [...guru, payload];
    case DELETE_GURU:
      return guru.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_GURU:
      return [...detail, payload];
    case UPDATE_GURU:
      return guru.map((guru) => {
        if (guru.id === payload.id) {
          return {
            ...guru,
            ...payload,
          };
        } else {
          return guru;
        }
      });
    default:
      return guru;
  }
};

export default guruReducer;
