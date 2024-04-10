import React, { useState } from "react";
import PostList from "../../../components/layout/postList";
import PostForm from "../../../components/layout/postForm";
import { deletePost } from "../../../service/api/apiForum";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePostCreated = (newPost: Post) => {
    setPosts([...posts, newPost]);
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
      <h1>Forum</h1>
      <div className="forum-content">
        <div className="post-form">
          <PostForm onPostCreated={handlePostCreated} />
        </div>
        <div className="post-list">
          <PostList posts={posts} onDelete={handleDeletePost} />
        </div>
      </div>
    </div>
  );
};

export default Forum;
