import axios from "axios";
import API_URL from  './apiURl'

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "user", userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
