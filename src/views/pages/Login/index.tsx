import React, { useState, FormEvent, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../service/api/apiLogin";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [message, setMessage] = useState<string>(""); // Estado para mensagem
  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(""); // Limpar a mensagem após alguns segundos
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [message]);
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await login({ email: email, password, role });
      sessionStorage.setItem("token", token);
      console.log("Token de acesso:", token);
      setMessage("Login bem sucedido.");
      // Redirecionar para a página principal
      navigate("/");
      // Recarregar a página automaticamente
      window.location.reload();
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMessage("Erro ao fazer login. Por favor, verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container">
      <div
        className={`flash-message ${message ? "show" : ""} ${
          message.startsWith("Erro") ? "error-message" : "success-message"
        }`}
      >
        {message}
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="title">
          <h2>Login</h2>
        </div>
        <input
          type="text"
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
        <select
          className="select-Role"
          name="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value={""}>Selecione seu tipo de conta</option>
          <option value={"user"}>Usuario</option>
          <option value={"psychologist"}>Psicologo</option>
          <option value={"moderator"}>Moderador</option>
          <option value={"admin"}>Administrador</option>
        </select>
        <div className="buttons">
          <Link to="/singUpUser">
            <button type="button">Cadastre-se</button>
          </Link>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
