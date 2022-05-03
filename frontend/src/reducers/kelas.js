import {
  RETRIEVE_KELAS, RETRIEVE_DETAIL_KELAS,
  CREATE_KELAS, DELETE_KELAS, UPDATE_KELAS,
} from '../actions/types';

const initialState = [];
const detailKelas = [];

const kelasReducer = (
    kelas = initialState, action,
    detail = detailKelas,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_KELAS:
      return payload;
    case CREATE_KELAS:
      return [...kelas, payload];
    case DELETE_KELAS:
      return kelas.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_KELAS:
      return [...detail, payload];
    case UPDATE_KELAS:
      return kelas.map((kelas) => {
        if (kelas.id === payload.id) {
          return {
            ...kelas,
            ...payload,
          };
        } else {
          return kelas;
        }
      });
    default:
      return kelas;
  }
};

export default kelasReducer;
