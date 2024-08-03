import React, { useState } from "react";
import "./index.css";

const TrabalheConosco = (props: any) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [abordagem, setAbordagem] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [certificadoCRP, setCertificadoCRP] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setCertificadoCRP(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend ou fazer o que for necessário
    // por exemplo, enviar para uma API de cadastro de psicólogos
    console.log({
      nome,
      email,
      senha,
      abordagem,
      especialidade,
      certificadoCRP,
    });
  };

  return (
    <div className="registerPsy-container">
      <div className="psyBanner">
        <strong className="title">
          Seja bem vindo, aqui você irá fazer o cadastro para trabalhar conosco.<br></br>
          Agradecemos o seu interesse!!!
        </strong>
      </div>
      <form className="registerPsy-form" onSubmit={handleSubmit}>
        <div className="filds-left">
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </label>
        </div>
        <div className="filds-right">
          <label>Abordagem:</label>
          <select
            value={abordagem}
            onChange={(e) => setAbordagem(e.target.value)}
          >
            <option value="">Selecione uma abordagem</option>
            <option value="Humanista">Humanista</option>
            <option value="Psicanálise">Psicanálise</option>
            {/* Adicione mais opções conforme necessário */}
          </select>

          <label>Especialidade:</label>
          <select
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
          >
            <option value="">Selecione uma especialidade</option>
            <option value="Ansiedade">Ansiedade</option>
            <option value="Depressão">Depressão</option>
            {/* Adicione mais opções conforme necessário */}
          </select>

          <label>Certificado CRP:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="psyButton">
          <button className="psySubmit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrabalheConosco;
