import {RETRIEVE_SEKOLAH, UPDATE_SEKOLAH} from '../actions/types';

const initialState = [];

const sekolahReducer = (sekolah = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_SEKOLAH:
      return payload;
    case UPDATE_SEKOLAH:
      return payload;
    default:
      return sekolah;
  }
};

export default sekolahReducer;
