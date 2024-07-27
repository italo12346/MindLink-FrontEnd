import React, { useState } from "react";
import PostList from "../../../components/layout/postList";
import PostForm from "../../../components/layout/postForm";
import { deletePost } from "../../../service/api/apiForum";
import "./index.css"; // Importar o arquivo CSS para estilização
import Flag from "../../../components/layout/flag";
import Modal from "../../../components/modal"; // Importar o componente Modal

interface Post {
  id: number;
  title: string;
  content: string;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostCreated = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setIsModalOpen(false); // Fecha o modal após a criação do post
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId);
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="Forum">
      <Flag title="Forum" />
      <div className="forum-content">
        <label>Participe da Comunidade </label>
        <div className="post-actions">
          <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
            Criar Postagem
          </button>
        </div>
        <div className="post-list">
          <PostList posts={posts} onDelete={handleDeletePost} />
        </div>
      </div>
      
      {/* Modal para criar postagem */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostForm onPostCreated={handlePostCreated} />
      </Modal>
    </div>
  );
};

export default Forum;
