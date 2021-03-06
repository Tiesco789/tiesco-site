import './LinksAbout.css';

export default function LinksAbout() {
  return (
    <section className="about">
      <div className="text-section">
        <h1 className="title-section">Franccesco Antonio</h1>
        <p className="p-about">Desenvolvedor Web & Front-end</p>
      </div>
      <div className="links-about">
        <ul className="links">
          <li><a rel="noreferrer" className="link-about" target="_blank" href="https://github.com/Tiesco789"><i className="fab fa-2x fa-github"></i></a></li>
          <li><a rel="noreferrer" className="link-about" target="_blank" href="https://www.twitch.tv/tiesco789"><i className="fab fa-2x fa-twitch"></i></a></li>
          <li><a rel="noreferrer" className="link-about" target="_blank" href="https://www.linkedin.com/in/franccesco-antonio/"><i className="fab fa-2x fa-linkedin-in"></i></a></li>
          <li><a rel="noreferrer" className="link-about" target="_blank" href="mailto:franccesco_@hotmail.com"><i className="fas fa-2x fa-envelope"></i></a></li>
        </ul>
      </div>
    </section>
  )
}