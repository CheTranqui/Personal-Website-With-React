import React from 'react';

import "./projects.css";

const Project = (props) => {
    const project = props.project;

    return (
			<div className="projectContainer" id="projectContainer">
				<section className="projectPreview" id="projectPreview">
					<figure id="projectFigure">
						<figcaption className="projectCaption" id="projectCaption">
							<h2 id="projectTitle">{project.title}</h2>
						</figcaption>
						<img
							className="projectImage"
							id="projectImage"
							src={project.imageSource}
							alt="Project preview"
						/>
					</figure>
				</section>
				<section
					className="projectDescriptionSection"
					id="projectDescriptionSection"
				>
					<p className="projectText" id="projectDescription">
						{project.description}
					</p>
					<h2 className="projectLessonTitle">What I Learned</h2>
					<p className="projectText" id="projectLesson">
						{project.lesson}
					</p>
				</section>
				<section className="projectLinks" id="projectLinks">
					<a
						className="projectLink"
						id="projectLink1"
						href={project.link1}
						target="_blank"
						rel="noreferrer"
						tabIndex="5"
					>
						{project.link1Text}
					</a>
					{project.link2 ? (
						<a
							className="projectLink"
							id="projectLink2"
							href={project.link2}
							target="_blank"
							rel="noreferrer"
							tabIndex="6"
						>
							{project.link2Text}
						</a>
					) : null}
					{project.link3 ? (
						<a
							className="projectLink"
							id="projectLink3"
							href={project.link3}
							target="_blank"
							rel="noreferrer"
							tabIndex="7"
						>
							{project.link3Text}
						</a>
					) : null}
				</section>
			</div>
		);
};

export default Project