import React, { Component } from 'react';
import '../style.css';
import Container from '../components/Container';
import Project from '../components/Project';
import Projects from '../components/Projects.json';
import '../style.css'

export default class Portfolio extends Component {
  state = {
    projects: Projects,
  };

  createBuiltList() {
    alert('working?');
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className='has-text-white font title is-1 center underline main-header'>
            Projects
          </h1>

            <Project
              projects={this.state.projects}
              createBuiltList={this.createBuiltList}
            />

        </Container>
      </div>
    );
  }
}
