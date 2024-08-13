import axios from "axios";
import API_URL from "./apiURl";

// Função para obter o token do sessionStorage
const getToken = () => sessionStorage.getItem("token");

// Função para obter todos os posts
export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}post/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Função para criar um novo post
export const createPost = async (postData) => {
  try {
    const token = getToken();
    const response = await axios.post(`${API_URL}post/`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Função para excluir um post
export const deletePost = async (postId) => {
  try {
    const token = getToken();
    await axios.delete(`${API_URL}post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
