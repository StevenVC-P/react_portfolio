import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <strong className="header">{props.name}</strong>
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
      </div>
      <nav className="navbar-expand navbar-light">
      <div className="content nav navbar-nav d-flex justify-content-around">
      <a className="nav-link nav-itemb" href={props.url} target = "_blank" rel="noopener noreferrer"><strong>Page</strong></a> 
      <a className="nav-link nav-itemb" href={props.github} target = "_blank" rel="noopener noreferrer"><strong>Repository</strong></a>

      </div>
      </nav>
    </div>
  );
}

export default ProjectCard;
