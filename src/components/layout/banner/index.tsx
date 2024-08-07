import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Banner = () => (
  <div className="banner">
    <img
      className="banner-img"
      src="https://www.jornalcontabil.com.br/images/noticias/8142/8898745916cf2fd740dda3d67ece5d5c.jpg"
      alt="Banner"
    />
    <div className="banner-info">
      <span className="banner-text">
        Encontre apoio, compartilhe experiências e construa um caminho para o
        bem-estar emocional em nossa comunidade acolhedora de apoio psicológico.
      </span>
      <div className="button">
      <Link to="/quero-comecar">
        <input type="button" className="banner-input" value="Junte-se à nós" />
        </Link>
      </div>
    </div>
  </div>
);
export default Banner;
