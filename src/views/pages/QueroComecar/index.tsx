import React, { useState, useEffect } from "react";
import axios from "axios";
import PsicologoCard from "../../../components/layout/psychologistCard"; // Importe o componente PsicologoCard
import "./index.css";

const QueroComecar = () => {
  const [especialidade, setEspecialidade] = useState("");
  const [abordagem, setAbordagem] = useState("");
  const [psicologos, setPsicologos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/psychologist");
        setPsicologos(response.data);
        console.log(psicologos);
      } catch (error) {
        console.error("Erro ao buscar psicólogos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="queroComecar-container">
      <div className="queroBanner">
        <div className="title">
          <p>
            Encontre seu psicólogo!
            <br />
            Comece agora seu atendimento psicológico online agora !!!
          </p>
        </div>
        <form className="queroComecar-form">
          <div className="fields">
            <div className="fields-left">
              <label>Especialidade </label>
              <select
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
                className="input-field" // Adicionei a classe input-field para utilizar o estilo CSS
              >
                <option value="">Selecione uma especialidade</option>
                <option value="Ansiedade">Ansiedade</option>
                <option value="Depressão">Depressão</option>
                {/* Adicione mais opções conforme necessário */}
              </select>
              <label htmlFor="buscarNome">Buscar por Nome</label>
              <input
                type="text"
                id="buscarNome"
                name="buscarNome"
                placeholder="Digite o nome do psicólogo desejado"
                className="input-field"
              />
            </div>
            <div className="fields-right">
              <label>Abordagem</label>
              <select
                value={abordagem}
                onChange={(e) => setAbordagem(e.target.value)}
                className="input-field" // Adicionei a classe input-field para utilizar o estilo CSS
              >
                <option value="">Selecione uma abordagem</option>
                <option value="Humanista">Humanista</option>
                <option value="Psicanálise">Psicanálise</option>
                {/* Adicione mais opções conforme necessário */}
              </select>

              <button type="button" className="submit">
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="psicologos-container">
        {psicologos.map((psicologo, index) => (
          <PsicologoCard key={index} psicologo={psicologo} />
        ))}
      </div>
    </div>
  );
};

export default QueroComecar;
