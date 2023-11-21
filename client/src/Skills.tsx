import JsLogo from '../skills/javaScript.png';
import TsLogo from '../skills/typeScript.png';
import HTMLLogo from '../skills/html.png';
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
            fontSize: '2rem',
            textAlign: 'center',
            margin: '.5rem 0 1rem 0',
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
            fontSize: '2rem',
            textAlign: 'center',
            margin: '.5rem 0 1rem 0',
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
            fontSize: '2rem',
            textAlign: 'center',
            margin: '.5rem 0 1rem 0',
          }}>
          HTML 5
        </h2>
      </a>
    </div>
  );
}
