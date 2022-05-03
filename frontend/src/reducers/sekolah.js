import {RETRIEVE_SEKOLAH, UPDATE_SEKOLAH} from '../actions/types';

const initialState = [];

const sekolahReducer = (sekolah = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_SEKOLAH:
      return payload;
    case UPDATE_SEKOLAH:
      return sekolah.map((sekolah) => {
        if (sekolah.id === payload.id) {
          return {
            ...sekolah,
            ...payload,
          };
        } else {
          return sekolah;
        }
      });
    default:
      return sekolah;
  }
};

export default sekolahReducer;
