// PostList.tsx
import React from "react";


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
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
