import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card col-12 col-sm-5">
      <strong className="header">
        <h3>{props.name}</h3>
      <p><strong>Summary:</strong> {props.summary}</p>
      <p><strong>Technical:</strong> {props.tech}</p>
      </strong>
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      </div>
      <nav className="navbar-expand project-nav">
        <div className="content nav navbar-nav d-flex justify-content-around">
          <a className="nav-link nav-itemb" href={props.url} target = "_blank" rel="noopener noreferrer"><strong>Page</strong></a> 
          <a className="nav-link nav-itemb" href={props.github} target = "_blank" rel="noopener noreferrer"><strong>Repository</strong></a>
        </div>
      </nav>
    </div>
  );
}

export default ProjectCard;
