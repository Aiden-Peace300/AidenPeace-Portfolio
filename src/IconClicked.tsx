import { useState } from "react";
import Contact from './Contact.tsx';

export function IconClicked() {

  const [emailPopupVisible, setEmailPopupVisible] = useState(false);

  const toggleEmailPopup = () => {
    setEmailPopupVisible(!emailPopupVisible);
  };

  const handleCloseContactPopup = () => {
    setEmailPopupVisible(false);
  };
  return (
    <>
      <nav>
        <ul style={{listStyleType: 'none'}}className="flex-container">
          <li>
            <a href="#" className="icon-text">
              Home
            </a>
          </li>
          <hr />
          <li>
            <a href="#services" className="icon-text">
              Services
            </a>
          </li>
          <hr />
          <li>
            <a href="#projects" className="icon-text">
              Projects
            </a>
          </li>
          <hr />
          <li>
            <a href="#about" className="icon-text">
              About
            </a>
          </li>
          <hr />
          <li>
            <a className="cta icon-text" href="#contact" onClick={toggleEmailPopup}>
              <button style={{color: 'black'}} className="contact-button">Contact</button>
            </a>
          </li>
        </ul>
        {emailPopupVisible && <Contact onClose={handleCloseContactPopup} />}
      </nav>
    </>
  );
}
