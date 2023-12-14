import React from 'react';
import './Contact.css';
import mailIco from '@images/icons/envelope.svg';
import linkedinIco from '@images/icons/linkedin.svg';

export default function Contact() {
  return (
    <div className="contact">
      <a className="link email" href="mailto:masonbennett1721@gmail.com">
        <figure className="contact-icon">
          <img src={mailIco} alt="email"/>
        </figure>
        <p>Email</p>
      </a>
      <a className="link linkedin" target="_blank" href="https://www.linkedin.com/in/mason-bennett-074856191">
        <figure className="contact-icon">
          <img src={linkedinIco} alt="linkedin"/> 
        </figure>
        <p>LinkedIn</p>
      </a>
    </div>
  );
}