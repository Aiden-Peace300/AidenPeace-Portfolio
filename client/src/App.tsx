import './App.css';
import logo from '../images/aidensLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import About from './About.tsx';

export default function App() {
  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#contact">
          <button>Contact</button>
        </a>
      </header>
      <section id="home" className="meet">
        <div className="container">
          <div className="content">
            <div className="meet-main">
              <div className="meet-text">
                <h1>
                  Front-End React <br /> Developer
                </h1>
                <p>
                  Hi, I'm Aiden Peace. A passionate Front-end React Developer
                  based in Lake Forest, California. 📍
                </p>
                <span>
                  <a
                    href="https://www.linkedin.com/in/aiden-peace-025918211/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fab fa-linkedin"
                    />
                  </a>
                  <a
                    href="https://github.com/Aiden-Peace300"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                </span>
              </div>
              <div className="photoOfAiden"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="skill-content">
            <div className="skills">
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container">
          <div className="project-content">
            <div className="projects">
              <Projects />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about">
              <About />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
