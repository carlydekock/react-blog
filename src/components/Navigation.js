import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'DSA',
    path: '/dsa'
  },
  {
    title: 'Resources',
    path: '/resources'
  },
  {
    title: 'Thoughts',
    path: '/thoughts'
  }
]

function Navigation () {
  return (
    <div className="navigation">
      <nav className="site-navigation">
        <span>My React Blog</span>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;