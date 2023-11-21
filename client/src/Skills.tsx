import JsLogo from '../skills/javaScript.png';
import TsLogo from '../skills/typeScript.png';
import HTMLLogo from '../skills/html.png';
import CSSLogo from '../skills/css.png';
import ReactLogo from '../skills/react.png';
import './Skills.css';

export default function Skill() {
  return (
    <div className="skill-container">
      <a
        href="https://262.ecma-international.org/6.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="js-logo" src={JsLogo} alt="javascript logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '1.2rem 0 1rem 0',
          }}>
          ES6
        </h2>
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="ts-logo" src={TsLogo} alt="TypeScript logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '1.2rem 0 1rem 0',
          }}>
          TypeScript
        </h2>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="html-logo html" src={HTMLLogo} alt="html logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '.5rem 0 1rem 0',
          }}>
          HTML5
        </h2>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="css-logo css" src={CSSLogo} alt="css logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '.5rem 0 1rem 0',
          }}>
          CSS3
        </h2>
      </a>
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="react-logo react" src={ReactLogo} alt="react logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '2.3rem 0 1rem 0',
          }}>
          React
        </h2>
      </a>
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="react-logo react" src={ReactLogo} alt="react logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '2.3rem 0 1rem 0',
          }}>
          React
        </h2>
      </a>
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="react-logo react" src={ReactLogo} alt="react logo" />
        <h2
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            margin: '2.3rem 0 1rem 0',
          }}>
          React
        </h2>
      </a>
    </div>
  );
}
