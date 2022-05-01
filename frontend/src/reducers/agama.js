import {RETRIEVE_AGAMA} from '../actions/types';

const initialState = [];

const agamaReducer = (agama = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_AGAMA:
      return payload;
    default:
      return agama;
  }
};

export default agamaReducer;
