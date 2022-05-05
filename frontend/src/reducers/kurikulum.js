import {
  RETRIEVE_KURIKULUM, RETRIEVE_DETAIL_KURIKULUM,
  CREATE_KURIKULUM, DELETE_KURIKULUM, UPDATE_KURIKULUM,
} from '../actions/types';

const initialState = [];
const detailKurikulum = [];

const kurikulumReducer = (
    kurikulum = initialState, action,
    detail = detailKurikulum,
) => {
  const {type, payload} = action;

  switch (type) {
    case RETRIEVE_KURIKULUM:
      return payload;
    case CREATE_KURIKULUM:
      return [...kurikulum, payload];
    case DELETE_KURIKULUM:
      return kurikulum.filter(({id}) => id !== payload.id);
    case RETRIEVE_DETAIL_KURIKULUM:
      return [...detail, payload];
    case UPDATE_KURIKULUM:
      return kurikulum.map((kurikulum) => {
        if (kurikulum.id === payload.id) {
          return {
            ...kurikulum,
            ...payload,
          };
        } else {
          return kurikulum;
        }
      });
    default:
      return kurikulum;
  }
};

export default kurikulumReducer;
