import React from "react";
import "./index.css";

interface Psicologo {
  id: number;
  name: string;
  specialties: string;
  approach: string;
  valorConsulta: number;
  profilePicturePath: string;
}

const PsicologoCard: React.FC<{ psicologo: Psicologo }> = ({ psicologo }) => {
  const { name, specialties, approach, valorConsulta, profilePicturePath } =
    psicologo;
  console.log(profilePicturePath);

  return (
    <div className="psicologo-card">
      <img
        src={profilePicturePath}
        alt="Imagem de perfil"
        className="psicologo-image"
      />
      <div className="psicologo-info">
        <h2>{name}</h2>
        <div className="specialties">
          <p>
            <strong>Especialidade :</strong> {specialties}
          </p>
        </div>
        <div className="approach">
          <p>
            <strong>Abordagem :</strong>
            {approach}
          </p>
        </div>
      </div>
      <p className="valor-consulta"> R${valorConsulta}</p>
      <div className="psicologo-button">
        <button>Entrar em Contato</button>
      </div>
    </div>
  );
};

export default PsicologoCard;
