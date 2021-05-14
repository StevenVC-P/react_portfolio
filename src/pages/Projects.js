import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projects from "../projects.json";

class Projects extends Component {
    state = {
        projects
    };

    render(){
        return(
            <div>
                <h3 className="text-center">Projects</h3>
                <Wrapper>
                    {this.state.projects.map(projects => (
                        <ProjectCard
                        id={projects.id}
                        name={projects.name}
                        image={projects.image}
                        github={projects.url}
                        url={projects.url}
                        />
                    ))}
                </Wrapper>
            </div>
        )
    }
}

export default Projects