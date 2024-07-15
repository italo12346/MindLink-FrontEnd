import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import Bandon from '../../../components/layout/bandon';
import Banner from '../../../components/layout/banner';
import Card from '../../../components/layout/card';
import Flag from '../../../components/layout/flag';
import './index.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um event listener para verificar a posição da página ao rolar
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    // Verifica se a posição atual da página é maior que 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Rola a página para o topo com animação suave
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Suaviza a rolagem
    });
  };

  return (
    <div className="Home">
      <Banner />
      <Flag title="Como Funciona ?" />
      <section id="section-1">
        <div className="info">
          <div className="text-info">
            <p>
              Converse, aprenda e encontre ajuda profissional - Tudo em um só
              lugar! Descubra como nossa rede social simplifica o apoio emocional
              e a busca por psicólogos. É fácil, é seguro, é para você!
            </p>
            <p>
              A MindLink oferece um meio simples e direto de contatar psicólogos
              profissionais. Procure um especialista de acordo com área de atuação
              e entre em contato imediatamente para agendar seu atendimento! Nosso
              serviço foi pensado para ser acessível a quem mais precisa: você!
            </p>
          </div>
          <div className="cards">
            <Card
              image="https://www.psymeetsocial.com/_next/image?url=%2Fassets%2Fblog%2Farticles-media%2Fperigos-de-fumar-para-mulheres%2Fperigos-de-fumar-para-mulheres.webp&w=1080&q=75"
              title="Quais os Perigos de Fumar Para As Mulheres"
              url="https://www.psymeetsocial.com/blog/artigos/perigos-de-fumar-para-mulheres"
            />
            <Card
              image="https://www.psymeetsocial.com/_next/image?url=%2Fassets%2Fblog%2Farticles-media%2Fimpacto-do-estrogenio-na-saude-mental-das-mulheres%2Fimpacto-do-estrogenio-na-saude-mental-das-mulheres.webp&w=256&q=75"
              title="Quais os Impactos do Estrogênio na Saúde Mental das Mulheres"
              url="https://www.psymeetsocial.com/blog/artigos/impacto-do-estrogenio-na-saude-mental-das-mulheres"
            />
          </div>
        </div>
        <div className="bandon">
          <Bandon />
        </div>
      </section>
      <Flag title="Por que fazer terapia?" />
      <section id="section-2">
        <div className="text-info">
          <p>
            A qualidade de nossa saúde mental está diretamente ligada à nossa
            qualidade de vida em geral. Problemas como ansiedade, estresse e
            depressão são extremamente comuns hoje em dia e, para auxiliar com
            isso, nada melhor do que a ajuda de profissionais.
          </p>
          <p>
            A prática da terapia online, realizada por meio de videoconferência,
            audioconferência ou comunicação por texto (como chat, SMS e e-mail),
            tem uma história que remonta a mais de duas décadas, sendo
            influenciada por várias formas de interação mediada por computador ao
            longo do tempo (SKINNER; ZACK, 2004). Essa modalidade terapêutica se
            originou dos grupos de apoio na web na década de 1970, dos serviços de
            aconselhamento psicológico online gratuito em universidades
            norte-americanas na década de 1980, e das práticas de terapia por
            telefone e videoconferência psiquiátrica (SKINNER; ZACK, 2004).
          </p>
        </div>
        <img
          src="https://scontent.ffor37-1.fna.fbcdn.net/v/t1.6435-9/154382455_2862202707356168_5677843145162615093_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=4nMS1LNka3oQ7kNvgH8Nlla&_nc_ht=scontent.ffor37-1.fna&oh=00_AYC6ZgyE3JEYLEZy4XV1W7DKA7La1VN1SHmOdDgafnVIHQ&oe=66BC736C"
          alt="Terapia online"
          width="30%"
        />
      </section>
      {/* Botão flutuante para voltar ao topo */}
      {isVisible && (
        <div className="boxArrow" onClick={scrollToTop}>
          <FaArrowCircleUp width="100px" className="arrowUp" />
        </div>
      )}
    </div>
  );
};

export default Home;
