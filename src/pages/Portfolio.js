import React, { Component } from 'react';
import '../style.css';
import Container from '../components/Container';
import Project from '../components/Project';
import Projects from '../components/Projects.json';

export default class Portfolio extends Component {
  state = {
    projects: Projects,
  };

  createBuiltList = () => {
    return <p>some text</p>;
  };

  render() {
    return (
      <div>
        <Container>
          <h1 className='has-text-white font title is-1 center underline main-header'>
            Projects
          </h1>
          <div className='columns is-vcentered has-text-white'>
            <Project
              projects={this.state.projects}
              createBuiltList={this.createBuiltList}
            />
          </div>
        </Container>
      </div>
    );
  }
}
