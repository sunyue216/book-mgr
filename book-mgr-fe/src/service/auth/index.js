import axios from 'axios';

export const register = () => {
  axios.post('http://localhost:3000/auth/register',{
  account,
  password,
  });
};

export const login = () => {

};