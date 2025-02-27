import React from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projects from "../projects.json";

function Projects() {
  return (
    <div>
      <h3 className="text-center">Projects</h3>
      <Wrapper>
        {projects.map((project) => (
          <ProjectCard key={project.id} id={project.id} name={project.name} image={project.image} summary={project.summary} tech={project.tech} github={project.github} url={project.url} />
        ))}
      </Wrapper>
    </div>
  );
}

export default Projects;
