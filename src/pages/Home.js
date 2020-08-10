import React from 'react';
import Container from '../components/Container';

export default function Home() {
  return (
    <div>
      <Container>
        <section class='navbar-font hero white-font is-medium'>
          <div class='hero-body'>
            <div class='container has-text-centered'>
              <h1 class='title large-font white-font center bold'>Karen Astell</h1>
              <h2 class='subtitle med-font med-font bold white-font center'>
                Full Stack Web Devleoper
              </h2>
            </div>
          </div>
        </section>

        <div class='container large-margin'>
          <main class='white-font font main-margin brand-statement'>
            My name is Karen Astell and I am excited to begin my journey as a
            full-stack web developer. I’ve earned a Bachelor of Science in Math
            Education and a Masters of Education, both from the University of
            New Hampshire. The decision making and collaborative skills I’ve
            acquired over the past 15 years in education will help me
            tremendously in the world of web development. I am decisive yet
            adaptable in high-pressure environments and have a real passion for
            collaborating with others. I have completed a full-stack web
            development certificate program through UNH’s Coding Bootcamp.
            During this course, I developed my skills in HTML, CSS, JavaScript,
            jQuery, and Node.js as well as focusing on creating responsive web
            applications. Employers often acknowledge my problem-solving skills
            and a strong work ethic which lends itself to working in web
            development teams or individual projects. I am eager to create web
            applications that are applicable and user friendly and look forward
            to beginning my new career in web development.
          </main>
        </div>
      </Container>
    </div>
  );
}
