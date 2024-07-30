import axios from "axios";
import API_URL from  './apiURl'
if (API_URL) {
  console.log("api connect");
}

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL + "users", userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL + "users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await axios.put(
      API_URL + `users/${userId}`,
      updatedUserData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(API_URL + `users/${userId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(API_URL + `users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadProfileImage = async (userId, imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      API_URL + `users/${userId}/profile-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
