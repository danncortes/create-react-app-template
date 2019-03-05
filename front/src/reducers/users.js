const initialState = {
  data: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_USERS':
    return {
      ...state,
      isLoading: false,
      data: action.payload
    };
  case 'FETCH_USERS_LOADING':
    return {
      ...state,
      isLoading: true
    };
  case 'FETCH_USERS_ERROR':
    return {
      ...state,
      isLoading: false,
      hasError: action.payload
    };
  default:
    return state;
  }
};
