import {
  RETRIEVE_MATA_PELAJARAN, RETRIEVE_DETAIL_MATA_PELAJARAN,
  CREATE_MATA_PELAJARAN, DELETE_MATA_PELAJARAN, UPDATE_MATA_PELAJARAN,
} from '../actions/types';

const initialState = [];
const detailMataPelajaran = [];

const mataPelajaranReducer = (
    mataPelajaran = initialState, action,
    detail = detailMataPelajaran,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_MATA_PELAJARAN:
      return payload;
    case CREATE_MATA_PELAJARAN:
      return [...mataPelajaran, payload];
    case DELETE_MATA_PELAJARAN:
      return mataPelajaran.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_MATA_PELAJARAN:
      return [...detail, payload];
    case UPDATE_MATA_PELAJARAN:
      return mataPelajaran.map((mataPelajaran) => {
        if (mataPelajaran.id === payload.id) {
          return {
            ...mataPelajaran,
            ...payload,
          };
        } else {
          return mataPelajaran;
        }
      });
    default:
      return mataPelajaran;
  }
};

export default mataPelajaranReducer;
