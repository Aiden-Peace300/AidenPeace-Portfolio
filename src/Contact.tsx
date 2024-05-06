import React, { useState } from 'react';
import './Contact.css';

interface EmailPopupProps {
  onClose: () => void;
}

const Contact: React.FC<EmailPopupProps> = ({ onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupActive, setIsPopupActive] = useState(true);

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleOpenPopup = () => {
    setIsPopupActive(true);
  };

  const handleClosePopup = () => {
    onClose();
    setIsPopupActive(false);
  };

  const handleSendEmail = () => {
    const emailAddress = 'aidenpeacecodes@gmail.com';
    const subjectLine = encodeURIComponent(subject);
    const body = encodeURIComponent(`User Message: ${message}`);
    const mailtoLink = `mailto:${emailAddress}?subject=${subjectLine}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Open Popup</button>
      <div
        className={`email-popup-overlay ${isPopupActive ? 'active' : ''}`}
        onClick={handleClosePopup}
      ></div>
      <div className={`email-popup ${isPopupActive ? 'active' : ''}`}>
        <div className="email-popup-content">
          <span className="close-icon" onClick={handleClosePopup}>
            &times;
          </span>
          <h2 className='white contact_label'>Contact Aiden Peace</h2>
          <p className='white contact_text'>Feel free to reach out via <a className="email" href="mailto:aidenpeacecodes@gmail.com">email</a> or direct message on <a className="linkedIn" href="https://www.linkedin.com/in/aiden-peace-025918211/" target="_blank">LinkedIn</a>, always happy to connect!</p>
          <form>
            <label htmlFor="subject" className="white">
              Subject:
            </label>
            <input
              className='white'
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <br />
            <label htmlFor="message" className="white">
              Your Message:
            </label>
            <br />
            <textarea
              className='white'
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              rows={4}
              cols={50}
            />
            <br />
            <button type="button" onClick={handleSendEmail} className="white send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
