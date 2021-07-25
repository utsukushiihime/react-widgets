import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Accordion
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/list" className="nav-link">
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dropdown" className="nav-link">
              Dropdown
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/translate" className="nav-link">
              Translate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
