import './SectionAbout.css';

export default function SectionAbout() {
  return (
    <section className="section-about" id="sobre">
      <h1 className="title-section">Sobre</h1>
      <img className="img-profile" src="http://github.com/tiesco789.png" alt="Franccesco Antonio" />
      <div className="section-info">
        <div className="info-container">
          <p className="info-text">Me chamo Franccesco Antonio Ferrarezi Bordon, tenho 27 anos, sou formado em Design de Produto pela Universidade da Região de Joinville (Univille), me interessei pelo Web Design há 2 anos e desde então tenho praticado e estudado constantemente.</p>
          <p className="info-text">Meu objetivo como desenvolvedor web é trazer as melhores experiências visuais em sites agregando conforto visual, responsividade, interatividade e acessibilidade para todos os usuários.</p>
        </div>
      </div>
    </section>
  )
}