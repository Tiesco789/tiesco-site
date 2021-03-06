import Header from './components/header/Header'
import LinksAbout from './components/links-about/LinksAbout';
import SectionAbout from './components/section-about/SectionAbout';
import SectionSkills from './components/section-skills/SectionSkills';
import SectionContact from './components/section-contact/SectionContact';
import Footer from './components/footer/Footer';

import './styles/Mobile.css';

import './styles/App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <LinksAbout />
          <SectionAbout />
          <SectionSkills />
          <SectionContact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
