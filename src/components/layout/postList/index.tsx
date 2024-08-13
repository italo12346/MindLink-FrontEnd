import React from "react";
import "./index.css";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  onDelete: (postId: number) => Promise<void>;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
  return (
    <div className="post-list-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <button className="delete-button" onClick={() => onDelete(post.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
