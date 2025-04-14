// components/Header.jsx
import React from 'react';
import NavLinks from './NavLinks.jsx';
import { headerConfig } from './config/headerConfig';

function Header() {
  const { brand, navItems, buttons } = headerConfig;

  return (
    <header className="header" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50" tabIndex="0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 sticky-top">
        <div className="container-fluid">
        <div className="text-center text-md-start w-100">
        <a href="index.html">
            <img src={brand.imgURL} alt="school logo" className="rounded-circle ms-2"  width="80" height="80" />
          </a>
        </div>
         
          <a className="navbar-brand text-uppercase text-center text-md w-100" href="index.html">{brand.name}</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
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
