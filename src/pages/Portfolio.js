function Portfolio() {
    const projects = [
      { title: 'Project 1', liveLink: 'https://live-link1.com', repoLink: 'https://github.com/repo1' },
      { title: 'Project 2', liveLink: 'https://live-link2.com', repoLink: 'https://github.com/repo2' },
      { title: 'Project 3', liveLink: 'https://live-link3.com', repoLink: 'https://github.com/repo3' },
      { title: 'Project 4', liveLink: 'https://live-link4.com', repoLink: 'https://github.com/repo4' },
      { title: 'Project 5', liveLink: 'https://live-link5.com', repoLink: 'https://github.com/repo5' },
      { title: 'Project 6', liveLink: 'https://live-link6.com', repoLink: 'https://github.com/repo6' },
    ];
  
    return (
      <section>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Portfolio;
  