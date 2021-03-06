import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-about">
        <p>Desenvolvido por <b>Franccesco Antonio ©</b></p>
        <ul className="links">
          <li><a className="link-about" rel="noreferrer" target="_blank" href="https://github.com/Tiesco789"><i className="fab fa-lg fa-github"></i></a></li>
          <li><a className="link-about" rel="noreferrer" target="_blank" href="https://www.twitch.tv/tiesco789"><i className="fab fa-lg fa-twitch"></i></a></li>
          <li><a className="link-about" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/franccesco-antonio/"><i className="fab fa-lg fa-linkedin-in"></i></a></li>
          <li><a className="link-about" rel="noreferrer" target="_blank" href="mailto:franccesco_@hotmail.com"><i className="fas fa-lg fa-envelope"></i></a></li>
        </ul>
      </div>
    </footer>
  )
}