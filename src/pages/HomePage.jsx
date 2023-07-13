import '../css/HomePage.css';
// testee

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="container-btn-home-page">
        <a
          href="http://bibliawiki.pbworks.com/w/page/147603879/BibliaWiki"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
            Sobre Nós
        </a>

        <a
          href="http://bibliawiki.pbworks.com/w/page/147603879/BibliaWiki"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
            Ir Para BibliaWiki
        </a>
        <a
          href="https://wa.me/5547999911719"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
          Pedir Oração
        </a>
        <a
          href="https://wa.me/5547999911719"
          className="btn-home-page"
          target="_blank" rel="noreferrer"
        >
          Grupo de Estudos da Bíblia
        </a>
      </div>
    </section>
  )
}
