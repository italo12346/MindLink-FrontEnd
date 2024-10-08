import axios from "axios";
import API_URL from "./apiURl";

export const login = async (userData) => {
  try {
    console.log(userData);
    const response = await axios.post(API_URL + "login", userData);
    console.log(response);
    return response.data.token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
