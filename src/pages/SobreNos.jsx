import { Link } from 'react-router-dom';
import '../css/SobreNos.css';

export default function SobreNos() {
  return (
    <section>
      <div className="sobre-nos-container">
        <div className="right">
          <h1 className="title-SobreNos">Visão</h1>
          <p className="p-SobreNos">Tornar a Bíblia mais acessível e compreensível para todos, criando uma comunidade colaborativa de conhecimento bíblico confiável e valioso, inspirando pessoas a crescerem em sua fé e relacionamento com Deus.</p>
          <h1 className="title-SobreNos">Missão</h1>
          <p className="p-SobreNos">Fornecer uma plataforma online colaborativa para criar e compartilhar conhecimento bíblico confiável e acessível, de acordo com a doutrina adventista do sétimo dia, capacitando as pessoas a crescerem em sua fé e relacionamento com Deus.</p>
          <h1 className="title-SobreNos">Valores</h1>
          <p className="p-SobreNos"><b>Acessibilidade:</b> buscamos tornar o conhecimento bíblico acessível a todas as pessoas, independentemente de seu nível de conhecimento prévia</p>
          <p className="p-SobreNos"><b>Colaboração:</b> acreditamos que o conhecimento é construído através da colaboração e do compartilhamento de ideias entre os membros da plataforma.</p>
          <p className="p-SobreNos"><b>Excelência:</b> buscamos a excelência em tudo o que fazemos, com o objetivo de oferecer uma experiência de alta qualidade aos usuários da plataforma.</p>
          <p className="p-SobreNos"><b>Precisão:</b> estamos comprometidos em fornecer informações precisas e confiáveis sobre a Bíblia, de acordo com a doutrina adventista do sétimo dia.</p>
          <p className="p-SobreNos"><b>Respeito:</b> valorizamos o respeito mútuo e a diversidade de opiniões, reconhecendo que diferentes perspectivas podem enriquecer nosso conhecimento e compreensão da Bíblia.</p>
        </div>
        <div className="left">
          <img src="bibliawikiLogo.png" alt="logo-bibliawiki" className="logo"/>
          <Link
              to="/"
              className="btn-SobreNos"
              rel="noreferrer"
            >
                <i class="fa-solid fa-house"></i> Home
          </Link>
        </div>
      </div>
    </section>
  )
}
