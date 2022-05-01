import {RETRIEVE_ROMBEL} from '../actions/types';

const initialState = [];

const rombelReducer = (rombel = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_ROMBEL:
      return payload;
    default:
      return rombel;
  }
};

export default rombelReducer;
