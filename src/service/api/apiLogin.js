import axios from "axios";

const API_URL = "http://localhost:3001/";

export const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);
    return response.data.token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
