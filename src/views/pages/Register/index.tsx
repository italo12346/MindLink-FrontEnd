import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../service/api/apiRegister"; // Importe a função createUser da sua API

const SignUpUserPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // Chame a função createUser passando os dados do formulário
      await createUser({
        name: name,
        email: email,
        password: password,
      });
      alert("Usuário cadastrado com sucesso!");
      navigate("/login"); // Redirecione o usuário para a página de login após o cadastro bem-sucedido
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("O nome de usuario já existe. Por favor, tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="title">
          <h2>Cadastro</h2>
        </div>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="buttons">
            <Link to="/login">
              <button type="button">Tenho uma Conta</button>
            </Link>
            <button type="submit">Cadastre-se</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpUserPage;
