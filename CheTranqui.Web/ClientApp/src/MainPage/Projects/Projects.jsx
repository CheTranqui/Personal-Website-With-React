import React from "react";
import ProjectCarousel from './ProjectCarousel';

import './projects.css';

const Projects = () => {
    return (
			<article className="primaryProjectsArticle">
				<h1>Noteworthy Projects</h1>
				<p className="projectIntro" id="projectIntro">
					The following projects have been substantial in my learning:
				</p>
				<ProjectCarousel />
			</article>
		);
};

export default Projects;