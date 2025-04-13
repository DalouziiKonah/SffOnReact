import React from 'react';
import { footerData } from './config/footerData';

function Footer() {
  const { contactInfo, quickLinks, socialLinks, copyright } = footerData;

  return (
    <footer className="footer bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row">
          {/* School Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">{contactInfo.schoolName}</h5>
            <p>
              {contactInfo.address.split('\n').map((line, idx) => (
                <span key={idx}>
                  {line}<br />
                </span>
              ))}
              Phone: {contactInfo.phone}<br />
              Email: {contactInfo.email}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-light text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Connect With Us</h5>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-light me-3"
                aria-label={social.platform}
              >
                <i className={`bi bi-${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center mt-3">
            <p className="mb-0">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
