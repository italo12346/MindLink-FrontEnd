import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboard,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Bandon = () => {
  return (
    <div className="bandon-container">
      <div className="bandon-step">
        <span className="step-number">1</span>
        <FontAwesomeIcon icon={faUser} size="3x" />
        <h3>Procure um psicólogo de acordo com a especialidade</h3>
      </div>

      <div className="bandon-step">
        <span className="step-number">2</span>
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        <h3>Clique no botão do WhatsApp no perfil do psicólogo</h3>
      </div>

      <div className="bandon-step">
        <span className="step-number">3</span>
        <FontAwesomeIcon icon={faClipboard} size="3x" />
        <h3>Combinem juntos os detalhes do atendimento</h3>
      </div>

      <div className="bandon-step">
        <span className="step-number">4</span>
        <FontAwesomeIcon icon={faLaptop} size="3x" />
        <h3>Faça a sessão no seu computador ou dispositivo móvel</h3>
      </div>
      <p className="bandon-text">
        Caso tenha qualquer dificuldade, estamos à disposição no WhatsApp!
      </p>
    </div>
  );
};

export default Bandon;
