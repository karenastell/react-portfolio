import React from 'react';


export default function Project(props) {
  console.log(props.projects);
  return (
    <div >
    {props.projects.map((project) => (
        <div className='columns is-vcentered has-text-white'>
          <div className='column center'>
            <a
              target='_blank'
              href={project.deployedLink}
            >
              <img
                className='portfolio-image'
                src={project.image}
                alt={project.alt}
              />
            </a>
            <div className='link-margin center'>
              <a
                href={project.deployedLink}
                target='_blank'
              >
                <span className='has-text-white font'>{project.whereDeployed}</span>
              </a>
            </div>
            <div className='center'>
              <a
                href={project.github}
                target='_blank'
              >
                <span className='has-text-white font'>GitHub Repository</span>
              </a>
            </div>
          </div>
          <div className='column is-three-fifths project-margin'>
            <h1 className='title is-2 has-text-white font'>{project.title}</h1>
            <div className='has-text-white'>
              <p className='light-font bold font'>
            {project.description}
              </p>
              <p className='port-list bold'>
                This application was built using:
              </p>
              <div>
                <div className='columns'>
                  <div className='column'>
                    <ul className='ul-style bold'>
                        {props.createBuiltList}
                        {/* {project.builtWith.map((listItem)=>(
                            <li>listItem</li>
                        ))} */}
                    </ul>
                  </div>
                  {/* <div className='column'>
                    <ul className='ul-style bold column'>
                      <li>MySQL</li>
                      <li>Sequelize</li>
                      <li>Express</li>
                      <li>Express-fileupload</li>
                      <li>Nodemailer</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
     

  );
}
