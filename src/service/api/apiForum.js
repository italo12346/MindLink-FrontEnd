const axios = require("axios");

const API_URL = "http://localhost:3001/";

const fetchPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/post`);
    if (response.status !== 200) {
      throw new Error("Falha ao buscar post");
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    throw error;
  }
};

const createPost = async (postData) => {
  try {
    const response = await (`${API_URL}/post`, postData);
    if (response.status !== 201) {
      throw new Error("Falha ao criar post");
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw error;
  }
};

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/post/${postId}`);
    if (response.status !== 200) {
      throw new Error("Falha ao excluir post");
    }
  } catch (error) {
    console.error("Erro ao excluir post:", error);
    throw error;
  }
};

module.exports = {
  fetchPost,
  createPost,
  deletePost,
};
