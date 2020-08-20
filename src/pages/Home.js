import React from 'react';
import Container from '../components/Container';
import '../style.css';
import node from '../images/node.png';
import javascript from '../images/javascript.png';
import html from '../images/html.png';
import react from '../images/react.png';
import css from '../images/css.svg';
import express from '../images/express.png';
import jquery from '../images/jquery.png';
import mysql from '../images/mysql.png';

export default function Home() {
  return (
    <React.Fragment>
      <Container>
        <section className='navbar-font hero'>
          <div className='container has-text-centered'>
            <h1 className='title-text is-1 has-text-white'>Karen Astell</h1>
            <h2 className='subtitle is-3 bold has-text-white'>
              Full Stack Web Devleoper
            </h2>
          </div>
        </section>

        <div className='container large-margin'>
          <main className='has-text-white font main-margin brand-statement'>
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
            jQuery, Node.js, React.js, MySQL, and MongoDB as well as focusing on
            creating responsive web applications. Employers often acknowledge my
            problem-solving skills and a strong work ethic which lends itself to
            working in web development teams or individual projects. I am eager
            to create web applications that are applicable and user friendly and
            look forward to beginning my new career in web development.
          </main>
          <div style={imgDiv}>
            <img style={imageStyle} src={html} alt='html' />
            <img style={imageStyle} src={css} alt='css' />
            <img style={imageStyle} src={javascript} alt='java script' />
            <img style={imageStyle} src={jquery} alt='jquery' />
            <img style={imageStyle} src={react} alt='react' />
            <img style={imageStyle} src={express} alt='express' />
            <img style={imageStyle} src={node} alt='node' />
            <img style={imageStyle} src={mysql} alt='mysql' />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

const imageStyle = {
  height: '100px',
  padding: '15px',
};
const imgDiv = {
  marginTop: '100px',
  textAlign: 'center',
};
