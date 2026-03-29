// components/Header.jsx
import React from 'react';
import NavLinks from './NavLinks.jsx';
import { headerConfig } from './config/headerConfig';

function Header() {
  const { brand, navItems, buttons } = headerConfig;

  return (
    <header className="header" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50" tabIndex="0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2 py-md-3 sticky-top">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center gap-2 gap-md-3 min-w-0 me-2"
            href="index.html"
          >
            <img
              src={brand.imgURL}
              alt="school logo"
              className="rounded-circle flex-shrink-0"
              width="64"
              height="64"
            />
            <span className="navbar-school-name text-uppercase fw-bold text-start lh-sm">
              {brand.name}
            </span>
          </a>

          <button
            className="navbar-toggler flex-shrink-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <NavLinks links={navItems.main} />
            <button className="btn btn-outline-light ms-lg-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">
              {buttons.more}
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-start bg-primary text-white" data-bs-scroll="true" id="offcanvasWithBothOptions">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white">{buttons.menu}</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            {navItems.offcanvas.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-white text-decoration-none d-block m-2 p-2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
