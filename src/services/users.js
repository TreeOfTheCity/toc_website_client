import axios from 'axios';

const URL = 'https://toc-server.vercel.app/api';

export const register = async ({ name, email, contactnumber, role, receiveUpdates }) => {
  try {
    const response = await axios({
      url: `${URL}/users/joinus`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { name, email, contactnumber, role, receiveUpdates },
    });
    return response.data.message;
  } catch (err) {
    console.log(err);
    return {
      error: err.message,
    };
  }
};
