import { Link } from 'react-router-dom';
import '../css/HomePage.css';

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="container-btn-home-page">
        <Link
          to="/sobrenos"
          className="btn-home-page"
          rel="noreferrer"
        >
            <i class="fa-solid fa-users"></i> Sobre Nós
        </Link>

        <a
          href="http://bibliawiki.pbworks.com/w/page/147603879/BibliaWiki"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
            <i class="fa-solid fa-book-bible"></i> Ir Para BibliaWiki
        </a>
        <Link
          to="/prayerpage"
          className="btn-home-page"
          rel="noreferrer"
        >
            <i class="fa-solid fa-person-praying"></i> Pedir Oração
        </Link>
        <a
          href="https://wa.me/5547996251359"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i> Grupo de Estudos da Bíblia
        </a>
      </div>
    </section>
  )
}
