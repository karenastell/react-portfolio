import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fabGithub} from '@fortawesome/free-brands-svg-icons'
import Resume from '../files/KarenAstellResume.pdf';
import '../style.css';

//  const element = <FontAwesomeIcon icon={fabGithub}/>
export default function Navbar() {
  return (
    <nav role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='has-text-white ml-1 mr-3 navbar-item' to='/'>
          <span className=' navbar-font bold'>Home</span>
        </Link>
        <Link className='has-text-white navbar-item' to='/portfolio'>
          <span className=' navbar-font bold'>Portfolio</span>
        </Link>

        <div className='navbar-end'>
          <span className='navbar-item'>
            <a
              className='has-text-white bold nav-link-margin is-inverted'
              href='https://github.com/karenastell'
              target='_blank'
            >
              <span className='icon'>
                <i className='fab fa-github'></i>
              </span>
              <span className='navbar-font'>GitHub</span>
            </a>
            <a
              className='has-text-white bold nav-link-margin'
              target='_blank'
              href='https://www.linkedin.com/in/karen-astell/'
            >
              <span className='icon'>
                <i className='fab fa-linkedin'></i>
              </span>
              <span className='navbar-font'>LinkedIn</span>
            </a>
            <a
            className='has-text-white bold is-inverted'
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
      </div>
    </nav>
  );
}
