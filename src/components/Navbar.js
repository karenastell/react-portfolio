import React from 'react'

export default function Navbar() {
    return (
        <section class="navbar-font hero white-font is-medium">
        <nav  role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="index.html">
              <span class="white-font navbar-font bold">Home</span>
            </a>
            <a class="navbar-item" href="portfolio.html">
              <span class="white-font navbar-font bold">Portfolio</span>
            </a>
            <a class="navbar-item" href="contact.html">
              <span class="white-font navbar-font bold">Contact</span>
            </a>
        
            <div class="navbar-end">
              <span class="navbar-item">
                <a
                  class="white-font bold nav-link-margin is-inverted"
                  href="https://github.com/karenastell"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span class="navbar-font">GitHub</span>
                </a>
                <a
                  class="white-font bold nav-link-margin"
                  target="_blank"
                  href="https://www.linkedin.com/in/karen-astell/"
                >
                  <span class="icon">
                    <i class="fab fa-linkedin"></i>
                  </span>
                  <span class="navbar-font">LinkedIn</span>
                </a>
                <a
                  class="white-font bold is-inverted"
                  href="./assets/files/Resume.pdf"
                  target="_blank"
                >
                  <span class="icon">
                    <i class="far fa-file-pdf"></i>
                  </span>
                  <span class="navbar-font">Resume</span>
                </a>
              </span>
            </div>
          </div>
          
        </nav>
      </section>
    )
}
