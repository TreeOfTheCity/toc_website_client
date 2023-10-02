import axios from 'axios';

const HOST_URL = 'https://api.countrystatecity.in/v1';

export const getCountries = async () => {
  try {
    const response = await axios({
      url: `${HOST_URL}/countries`,
      method: 'GET',
      headers: {
        'X-CSCAPI-KEY': 'aDFJMzA2TkZ4R3BIcVJhenhCYVVncnF3UE5QOG85WGE5YkVNSzhUdg==',
      },
    });

    const countries = response?.data?.sort((a, b) => (a.name > b.name ? 1 : -1));

    return {
      success: 'countries_fetched',
      countries,
    };
  } catch (err) {
    console.log(err);
    return {
      error: err.message,
    };
  }
};

export const getStates = async (country) => {
  try {
    const response = await axios({
      url: `${HOST_URL}/countries/${country}/states`,
      method: 'GET',
      headers: {
        'X-CSCAPI-KEY': 'aDFJMzA2TkZ4R3BIcVJhenhCYVVncnF3UE5QOG85WGE5YkVNSzhUdg==',
      },
    });

    const states = response?.data?.sort((a, b) => (a.name > b.name ? 1 : -1));

    return {
      success: 'states_fetched',
      states,
    };
  } catch (err) {
    console.log(err);
    return {
      error: err.message,
    };
  }
};
