import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fabGithub} from '@fortawesome/free-brands-svg-icons'
import Resume from '../files/KarenAstellResume.pdf';
import '../style.css';

//  const element = <FontAwesomeIcon icon={fabGithub}/>
export default function Navbar() {
  return (
    <nav className='fence navbar navbar-expand-lg navbar-light bg-light'>
      <div className='navbar-collapse' id='navbarTogglerDemo02'>
        <div className='mr-auto'>
          <Link className='white-font ml-1 mr-3 navbar-item' to='/'>
            <span className=' navbar-font bold'>Home</span>
          </Link>
          <Link className='white-font navbar-item' to='/portfolio'>
            <span className=' navbar-font bold'>Portfolio</span>
          </Link>
        </div>

        <span className='white-font navbar-item'>
          <a
            className=' bold nav-link-margin is-inverted'
            href='https://github.com/karenastell'
            target='_blank'
          >
            <span className='icon'>
              <i className='fab fa-github'></i>
            </span>
            <span className='white-font navbar-font'>GitHub</span>
          </a>
          <a
            className=' bold nav-link-margin'
            target='_blank'
            href='https://www.linkedin.com/in/karen-astell/'
          >
            <span className='icon'>
              <i className='fab fa-linkedin'></i>
            </span>
            <span className='white-font navbar-font'>LinkedIn</span>
          </a>
          <a
            className='white-font bold is-inverted'
            href={Resume}
            target='_blank'
          >
            <span className='icon'>
              <i className='far fa-file-pdf'></i>
            </span>
            <span className='navbar-font'>Resume</span>
          </a>
        </span>
      </div>
    </nav>
  );
}
