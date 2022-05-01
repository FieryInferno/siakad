import {RETRIEVE_SISWA} from '../actions/types';

const initialState = [];

const siswaReducer = (siswa = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_SISWA:
      return [...siswa, payload];
    default:
      return siswa;
  }
};

export default siswaReducer;
