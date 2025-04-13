// components/NavLinks.jsx
import React from 'react';

function NavLinks({ links }) {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((link) => (
        <li className="nav-item" key={link.id}>
          <a className="nav-link" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
