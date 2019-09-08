import ActionTypes from '../Actions/ActionTypes';

const {
  LOGIN_REQUST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUST_ERROR,
  RESET,
} = ActionTypes;

const initialState = {
  loading: false,
  loginData: {},
  loginError: '',
};

const authReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case LOGIN_REQUST:
      return {
        ...state,
        loading: true,
        loginData: {},
        loginError: '',
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        loginData: payload,
        loginError: '',
      };
    case LOGIN_REQUST_ERROR:
      return {
        ...state,
        loading: false,
        loginData: {},
        loginError: payload,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
