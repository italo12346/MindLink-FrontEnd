import React, { useState } from "react";
import { createPost } from "../../../service/api/apiForum";
import { Editor } from "@tinymce/tinymce-react";
import "./PostForm.css";

interface Post {
  id: number;
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    try {
      const newPost = await createPost({ title, content });
      onPostCreated(newPost);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Erro ao criar postagem:", error);
      setError(
        "Falha ao criar postagem. Por favor, tente novamente mais tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="PostForm">
      <h2>Criar Postagem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="label-title">
            Título
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título do post"
            required
          />
        </div>
        <div className="form-group">
          <label>Conteúdo</label>
          <Editor
            apiKey="iwvorl37aa4cz1ew7dfiw4ed83t09z83vqmpqj0pv17r0098" // Sua chave de API do TinyMCE
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              height: 300, // Ajuste a altura do editor conforme necessário
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            textareaName="content"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
