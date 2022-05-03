import {
  RETRIEVE_JURUSAN, RETRIEVE_DETAIL_JURUSAN,
  CREATE_JURUSAN, DELETE_JURUSAN, UPDATE_JURUSAN,
} from '../actions/types';

const initialState = [];
const detailJurusan = [];

const jurusanReducer = (
    jurusan = initialState, action,
    detail = detailJurusan,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_JURUSAN:
      return payload;
    case CREATE_JURUSAN:
      return [...jurusan, payload];
    case DELETE_JURUSAN:
      return jurusan.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_JURUSAN:
      return [...detail, payload];
    case UPDATE_JURUSAN:
      return jurusan.map((jurusan) => {
        if (jurusan.id === payload.id) {
          return {
            ...jurusan,
            ...payload,
          };
        } else {
          return jurusan;
        }
      });
    default:
      return jurusan;
  }
};

export default jurusanReducer;
