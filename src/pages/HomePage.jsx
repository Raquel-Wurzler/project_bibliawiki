import '../css/HomePage.css';
// teste

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
        <a href="https://wa.me/5547999911719">
        <button
          type="button"
          className="btn-home-page"
        >
          Pedir Oração
        </button>
        </a>
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
