import React, { useState } from "react";
import { createPost } from "../../../service/api/apiForum";
import { Editor } from '@tinymce/tinymce-react'; // Importar o componente do TinyMCE
import "./PostForm.css"; // Importar o arquivo CSS para estilização

interface Post {
  id: number; // Ajuste conforme sua definição
  title: string;
  content: string;
}

interface PostFormProps {
  onPostCreated: (newPost: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      const newPost = await createPost({ title, content });
      onPostCreated(newPost);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post. Please try again later.");
    }
  };

  return (
    <div className="PostForm">
      <h2>Criar Postagem </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <Editor
            apiKey='iwvorl37aa4cz1ew7dfiw4ed83t09z83vqmpqj0pv17r0098' // Substitua pela sua chave de API do TinyMCE
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount'
              ],
              toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PostForm;
