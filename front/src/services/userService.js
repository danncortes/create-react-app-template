import axios from 'axios';

const baseUrl = process.env.REACT_APP_ROOT_API_URL;

export const getUsers = () =>
  axios
    .get(`${baseUrl}/users`)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });

export const getUser = () =>
  axios
    .get(`${baseUrl}/api/users`)
    .then((response) => response)
    .catch((error) => {
      throw Error(error);
    });
