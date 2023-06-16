import '../css/HomePage.css';
// teste

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="container-btn-home-page">

        <a
          href="http://bibliawiki.pbworks.com/w/page/147603879/BibliaWiki"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
          <button
            type="button"
            className="btn-home-page"
          >
            Ir Para BibliaWiki
          </button>
        </a>
        <a
          href="https://wa.me/5547999911719"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
        <button
          type="button"
          className="btn-home-page"
        >
          Pedir Oração
        </button>
        </a>
        <a
          href="https://wa.me/5547999911719"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
        <button
          type="button"
          className="btn-home-page"
        >
          Participar de um Grupo de Estudos da Bíblia
        </button>
        </a>
      </div>
    </section>
  )
}
