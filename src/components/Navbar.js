import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";  // Font Awesome
import { FaGithub } from "react-icons/fa";  // Font Awesome
import { FaFilePdf } from "react-icons/fa";  // Font Awesome
import Resume from '../files/KarenAstellResume.pdf';
import '../style.css';

// const element = <FontAwesomeIcon icon={['fab', 'apple']} />;
// const element = <FontAwesomeIcon icon={faCoffee} />;
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
       

              <span className='navbar-font'><FaGithub/>GitHub</span>
            </a>
            <a
              className='has-text-white bold nav-link-margin'
              target='_blank'
              href='https://www.linkedin.com/in/karen-astell/'
            >
           
              <span className='navbar-font'><FaLinkedin/>LinkedIn</span>
            </a>
            <a
              className='has-text-white bold is-inverted'
              href={Resume}
              target='_blank'
            >
            
              <span className='navbar-font'><FaFilePdf/>Resume</span>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
