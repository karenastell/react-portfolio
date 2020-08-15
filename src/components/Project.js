import React from 'react';
import '../style.css';

export default function Project(props) {
  console.log(props.projects);
  return (
    <div className='large-margin'>
      {props.projects.map((project) => (
        <div className='pt-5 pb-5 columns column-margin is-vcentered has-text-white'>
          <div className='column center'>
            <a
              target='_blank'
              href={project.deployedLink}
              rel='noreferrer noopener'
            >
              <img
                className='portfolio-image'
                src={require(`../images/${project.image}`)}
                alt={project.alt}
              />
            </a>
            <div className='link-margin center'>
              <a
                href={project.deployedLink}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span className='has-text-white font'>
                  {project.whereDeployed}
                </span>
              </a>
            </div>
            <div className='center'>
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer noopener'
              >
                <span className='has-text-white font'>GitHub Repository</span>
              </a>
            </div>
          </div>
          <div className='column is-three-fifths project-margin'>
            <h1 className='title is-2 has-text-white font'>{project.title}</h1>
            <div className='has-text-white'>
              <p className='project-font bold font'>{project.description}</p>
              <p className='project-font pb-5 port-list bold'>
                This application was built using:
              </p>
              <div>
                <div className='columns'>
                  <div className='column'>
                    <ul className='ul-style bold'>
                      {project.builtWith.map((listItem) => (
                        <li className='project-font'>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
