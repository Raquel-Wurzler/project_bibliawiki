import { Link } from 'react-router-dom';
import '../css/SobreNos.css';

export default function SobreNos() {
  return (
    <section>
      <div className="sobre-nos-container">
        <div>
          <h2>Visão</h2>
          <p>"Tornar a Bíblia mais acessível e compreensível para todos, criando uma comunidade colaborativa de conhecimento bíblico confiável e valioso, inspirando pessoas a crescerem em sua fé e relacionamento com Deus".</p>
          <h2>Missão</h2>
          <p>Fornecer uma plataforma online colaborativa para criar e compartilhar conhecimento bíblico confiável e acessível, de acordo com a doutrina adventista do sétimo dia, capacitando as pessoas a crescerem em sua fé e relacionamento com Deus".</p>
          <h2>Valores</h2>
          <p>Colaboração: acreditamos que o conhecimento é construído através da colaboração e do compartilhamento de ideias entre os membros da plataforma.
          Precisão: estamos comprometidos em fornecer informações precisas e confiáveis sobre a Bíblia, de acordo com a doutrina adventista do sétimo dia.
          Acessibilidade: buscamos tornar o conhecimento bíblico acessível a todas as pessoas, independentemente de seu nível de conhecimento prévio.
          Respeito: valorizamos o respeito mútuo e a diversidade de opiniões, reconhecendo que diferentes perspectivas podem enriquecer nosso conhecimento e compreensão da Bíblia.
          Excelência: buscamos a excelência em tudo o que fazemos, com o objetivo de oferecer uma experiência de alta qualidade aos usuários da plataforma.</p>
        </div>
        <img src="bibliawikiLogo.png" alt="logo-bibliawiki" width="50" height="50"/>
        <Link
          to="/"
          className="btn-home-page"
          rel="noreferrer"
        >
            Início
        </Link>
      </div>
    </section>
  )
}
