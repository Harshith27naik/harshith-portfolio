const Projects = () => {
  return (
    <main className="page">
      <h1>My Projects</h1>

      <div className="projects">

        <div className="project-card">
          <h2>Student Management Portal</h2>
          <p>
            A web application for managing student information.
          </p>
        </div>

        <div className="project-card">
          <h2>CineBook</h2>
          <p>
            A movie booking website created using HTML, CSS and JavaScript.
          </p>
        </div>

        <div className="project-card">
          <h2>HYDRAPATH</h2>
          <p>
            A project focused on reducing urban flooding through smart
            drainage and early warning systems.
          </p>
        </div>

      </div>
    </main>
  );
};

export default Projects;