import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ProjectCard({ name, summary, tech, image, url, github }) {
  return (
    <div className="card col-12 col-sm-5">
      <strong className="header">
        <h3>{name}</h3>
        <p>
          <strong>Summary:</strong> {summary}
        </p>
        <p>
          <strong>Technical:</strong> {tech}
        </p>
      </strong>
      <div className="img-container">
        <img alt={name} src={process.env.PUBLIC_URL + image} />
      </div>
      <nav className="navbar-expand project-nav">
        <div className="content nav navbar-nav d-flex justify-content-around">
          <a className="nav-link nav-itemb" href={url} target="_blank" rel="noopener noreferrer">
            <strong>Page</strong>
          </a>
          <a className="nav-link nav-itemb" href={github} target="_blank" rel="noopener noreferrer">
            <strong>Repository</strong>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default ProjectCard;
