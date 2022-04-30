import {LOGIN, LOGOUT} from '../actions/types';

const user = JSON.parse(localStorage.getItem('login'));
const initialState = user ? {...user} : null;

const loginReducer = (login = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return {...login, ...payload};
    case LOGOUT:
      return null;
    default:
      return login;
  }
};

export default loginReducer;
