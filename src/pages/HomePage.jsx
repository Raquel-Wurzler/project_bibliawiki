import '../css/HomePage.css';

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="container-btn-home-page">
        <button
          type="button"
          className="btn-home-page"
        >
          Ir Para BibliaWiki
        </button>
        <button
          type="button"
          className="btn-home-page"
        >
          Pedir Oração
        </button>
        <button
          type="button"
          className="btn-home-page"
        >
          Participar de um Grupo de Estudos da Bíblia
        </button>
      </div>
    </section>
  )
}
