import JsLogo from '../skills/javaScript.png';
import TsLogo from '../skills/typeScript.png';
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
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>ES6</h2>
      </a>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="image-container">
        <img className="ts-logo" src={TsLogo} alt="TypeScript logo" />
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>TypeScript</h2>
      </a>
    </div>
  );
}
