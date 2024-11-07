import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
    </div>
  );
};

export default Project;
