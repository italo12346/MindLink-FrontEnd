import axios from "axios";

const API_URL = "http://localhost:3001/";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "user", userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
