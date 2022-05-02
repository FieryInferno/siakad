import {
  RETRIEVE_SISWA, RETRIEVE_DETAIL_SISWA, CREATE_SISWA,
  DELETE_SISWA,
} from '../actions/types';

const initialState = [];
const detailSiswa = [];

const siswaReducer = (
    siswa = initialState, action,
    detail = detailSiswa,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_SISWA:
      return payload;
    case CREATE_SISWA:
      return [...siswa, payload];
    case DELETE_SISWA:
      return siswa.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_SISWA:
      return [...detail, payload];
    default:
      return siswa;
  }
};

export default siswaReducer;
