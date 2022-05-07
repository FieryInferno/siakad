import {
  RETRIEVE_DATA_DETAIL_KURIKULUM, CREATE_DETAIL_KURIKULUM,
  DELETE_DETAIL_KURIKULUM,
} from '../actions/types';

const initialState = [];

const detailKurikulumReducer = (detailKurikulum = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_DATA_DETAIL_KURIKULUM:
      return payload;
    case CREATE_DETAIL_KURIKULUM:
      return [...detailKurikulum, payload];
    case DELETE_DETAIL_KURIKULUM:
      return detailKurikulum.filter(({id}) => id !== payload.id);
    default:
      return detailKurikulum;
  }
};

export default detailKurikulumReducer;
