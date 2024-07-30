import axios from "axios";
import API_URL from  './apiURl'

export const getUserData = async (token) => {
  try {
    const response = await axios.get(API_URL + "profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const updateUser = async (userData) => {
  const id = userData.id;
  try {
    const token = sessionStorage.getItem("token");
    const response = await axios.put(
      `http://localhost:3001/user/${id}`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar dados do usuário:", error);
    throw error;
  }
};
