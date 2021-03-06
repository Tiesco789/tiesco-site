import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="menu-header">
        <ul className="links-header">
          <li><a rel="noreferrer" className="link" href="#sobre">Sobre</a></li>
          <li><a rel="noreferrer" className="link" href="#skills">Skills</a></li>
          <li><a rel="noreferrer" className="link" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}