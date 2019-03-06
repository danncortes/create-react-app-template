import { getUsers } from '../services/userService';

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: 'FETCH_USERS_LOADING' });
  return getUsers()
    .then((res) => dispatch({ type: 'FETCH_USERS', payload: res.data }))
    .catch((err) => dispatch({ type: 'FETCH_USERS_ERROR', payload: err.message }));
};
