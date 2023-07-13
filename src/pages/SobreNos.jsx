import { Link } from 'react-router-dom';
import '../css/HomePage.css';

export default function SobreNos() {
  return (
    <section className="home-page">
      <div className="container-btn-home-page">
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
