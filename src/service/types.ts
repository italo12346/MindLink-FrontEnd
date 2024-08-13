// types.ts

// Definindo o tipo User
export interface User {
  name: string;
  image: string;
}

// Definindo o tipo Post
export interface Post {
  id: number;
  title: string;
  content: string;
  user: User; // Adiciona a propriedade user que inclui o nome e a imagem do usuário
}
