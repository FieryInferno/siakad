import {
  RETRIEVE_TAHUN_AKADEMIK, RETRIEVE_DETAIL_TAHUN_AKADEMIK,
  CREATE_TAHUN_AKADEMIK, DELETE_TAHUN_AKADEMIK, UPDATE_TAHUN_AKADEMIK,
} from '../actions/types';

const initialState = [];
const detailTahunAkademik = [];

const tahunAkademikReducer = (
    tahunAkademik = initialState, action,
    detail = detailTahunAkademik,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_TAHUN_AKADEMIK:
      return payload;
    case CREATE_TAHUN_AKADEMIK:
      return [...tahunAkademik, payload];
    case DELETE_TAHUN_AKADEMIK:
      return tahunAkademik.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_TAHUN_AKADEMIK:
      return [...detail, payload];
    case UPDATE_TAHUN_AKADEMIK:
      return tahunAkademik.map((tahunAkademik) => {
        if (tahunAkademik.id === payload.id) {
          return {
            ...tahunAkademik,
            ...payload,
          };
        } else {
          return tahunAkademik;
        }
      });
    default:
      return tahunAkademik;
  }
};

export default tahunAkademikReducer;
