import {
  RETRIEVE_ROMBEL, RETRIEVE_DETAIL_ROMBEL,
  CREATE_ROMBEL, DELETE_ROMBEL, UPDATE_ROMBEL,
} from '../actions/types';

const initialState = [];
const detailRombel = [];

const rombelReducer = (
    rombel = initialState, action,
    detail = detailRombel,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_ROMBEL:
      return payload;
    case CREATE_ROMBEL:
      return [...rombel, payload];
    case DELETE_ROMBEL:
      return rombel.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_ROMBEL:
      return [...detail, payload];
    case UPDATE_ROMBEL:
      return rombel.map((rombel) => {
        if (rombel.id === payload.id) {
          return {
            ...rombel,
            ...payload,
          };
        } else {
          return rombel;
        }
      });
    default:
      return rombel;
  }
};

export default rombelReducer;
