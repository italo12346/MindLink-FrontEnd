import Bandon from "../../../components/layout/bandon";
import Banner from "../../../components/layout/banner";
import Card from "../../../components/layout/card";
import Flag from "../../../components/layout/flag";
import "./index.css";

const Home = () => (
  <div className="Home">
    <Banner />
    <Flag title="Como Funciona ?" />
    <section className="section-1">
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
    <section className="section-2">
      <div className="text-info">
        <p>
          A qualidade de nossa saúde mental está diretamente ligada à nossa
          qualidade de vida em geral. Problemas como ansiedade, estresse e
          depressão são extremamente comuns hoje em dia e, para auxiliar com
          isso, nada melhor do que a ajuda de profissionais.
        </p>
      </div>
    </section>
  </div>
);

export default Home;
