import axios from "axios";
import API_URL from  './apiURl'

export const login = async (userData) => {
  try {
    console.log(API_URL);
    const response = await axios.post(API_URL + "login", userData);
    return response.data.token;
  } catch (error) {

    throw error;
  }
};
