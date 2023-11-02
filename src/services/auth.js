import instance from '../services/instance';

const signup = async (credentials) => {
  try {
    console.log('Signing up user...');
    const response = await instance.authInstance.post('/users/signup', credentials);
    console.log('Signup Successful');
    console.log(response.data.message);
  } catch (error) {
    console.error('signup failed', error);
  }
};

const signin = async (credentials) => {
  try {
    console.log('Signing in user...');
    const response = await instance.authInstance.post('/users/signin', credentials);

    if (response.status === 200) {
      console.log('Signin Successful');
      console.log(response.data);

      localStorage.setItem('jwtToken', response.data.token);

      return "success";
    } else {
      console.error('signin failed');
    }
  } catch (error) {
    console.error('signin failed', error);
  }
};

const isAuthenticated = () => {
  const jwtToken = localStorage.getItem('jwtToken');
  return !!jwtToken; 
};

export default {
  signup,
  signin,
  isAuthenticated, 
};
