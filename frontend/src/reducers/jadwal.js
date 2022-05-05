import {RETRIEVE_JADWAL} from '../actions/types';

const initialState = [];

const jadwalReducer = (jadwal = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_JADWAL:
      return payload;
    default:
      return jadwal;
  }
};

export default jadwalReducer;
