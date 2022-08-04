import React, {useState, useEffect} from 'react';
import Project from './Project';

import SudokuImage from '../../images/projectImages/Sudoku.jpg';
import JavaMVCImage from '../../images/projectImages/JavaMVC.jpg';
import MartianTribunePreviewImage from '../../images/projectImages/MartianTribunePreview.jpg';
import EstateMgmtPreviewImage from '../../images/projectImages/EstateMgmtPreview.jpg';
import JavaScriptPreviewImage from '../../images/projectImages/JavaScriptPreview.jpg';
import "./projects.css";

const ProjectCarousel = () => {
    const [projects, setProjects] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const env = "prod";
	// make env equal to 'dev' to develop locally.
	
	// max of 5 projects allowed at this point in time.
	const maxProjects = 5;
	const nextSlide = () => {
		var newSlide = (currentSlide + 1);
		(newSlide >= maxProjects || newSlide < 0) ? setCurrentSlide(0) :
			setCurrentSlide(newSlide);
	};

	const previousSlide = () => {
		var newSlide = (currentSlide - 1);
		(newSlide < 0 || newSlide >= maxProjects) ? setCurrentSlide(maxProjects - 1) :
			setCurrentSlide(newSlide);
	};

	const jumpToProject0 = () => {
		setCurrentSlide(0);
	}

	const jumpToProject1 = () => {
		setCurrentSlide(1);
	}
	
	const jumpToProject2 = () => {
		setCurrentSlide(2);
	};

	const jumpToProject3 = () => {
		setCurrentSlide(3);
	};
	
	const jumpToProject4 = () => {
		setCurrentSlide(4);
	};

	const handleKeyUp = (event) => {
		switch (event.key) {
			// only acts on react state at the time this keydown
			// event occurs - doesn't interact with the full projects object
			case "ArrowLeft":
				previousSlide();
				break;
			case "ArrowRight":
				nextSlide();
				break;
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
				var slide = event.key - 1;
				setCurrentSlide(slide);
				break;
			default:
				break;
		}
	};

	const getImageSource = (name) => {
		switch (name) {
			case "Sudoku.jpg":
				return SudokuImage;
			case "JavaMVC.jpg":
				return JavaMVCImage;
			case "MartianTribunePreview.jpg":
				return MartianTribunePreviewImage;
			case "EstateMgmtPreview.jpg":
				return EstateMgmtPreviewImage;
			case "JavaScriptPreview.jpg":
				return JavaScriptPreviewImage;
			default:
				break;
		}
	}

	//parses the projectsArray into a slide object
	const mapProjectObjectArray = (JSONSlides) => {
		const slides = [];
		for (let i = 0; i < JSONSlides.length; i++) {
			let slide = [];
			slide.title = JSONSlides[i].title;
			slide.imageFile = JSONSlides[i].imageFile;
			slide.description = JSONSlides[i].description;
			slide.lesson = JSONSlides[i].lesson;
			//which links are present is variable - the following maps them
			let links = [];
			if (JSONSlides[i].linkToGithub != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToGithub.link;
				myLink.text = "Github";
				links.push(myLink);
			}
			if (JSONSlides[i].linkToYouTube != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToYouTube.link;
				myLink.text = "YouTube";
				links.push(myLink);
			}
			if (JSONSlides[i].linkToSteam != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToSteam.link;
				myLink.text = "Steam";
				links.push(myLink);
			}
			if (JSONSlides[i].linkToDownload != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToDownload.link;
				myLink.text = "Download";
				links.push(myLink);
			}
			if (JSONSlides[i].linkToGithubIO != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToGithubIO.link;
				myLink.text = "GithubIO";
				links.push(myLink);
			}
			if (JSONSlides[i].linkToWebsite != null) {
				let myLink = [];
				myLink.link = JSONSlides[i].linkToWebsite.link;
				myLink.text = "Website";
				links.push(myLink);
			}
			// inserts the first 3 links (if they exist) - assumes there's always at least 1
			if (links.length >= 3) {
				slide.link3 = links[2].link;
				slide.link3Text = links[2].text;
			}
			if (links.length >= 2) {
				slide.link2 = links[1].link;
				slide.link2Text = links[1].text;
			}
			slide.link1 = links[0].link;
			slide.link1Text = links[0].text;

            slide.imageSource = getImageSource(slide.imageFile);
			slides.push(slide);
		}
		return slides;
	};

	useEffect(() => {
		if (projects.length < 5) {
			let myProjects;
			const fetchProjects = async () => {
				if (env === "dev") {
					myProjects = await fetch("https://localhost:7213/project").then((res) => res.json());
				}
				else {
					myProjects = await fetch("http://chetranqui.azurewebsites.net/project").then((res) => res.json());
				}
			setProjects(mapProjectObjectArray(await myProjects.result));
			}
			fetchProjects();
		}
		document.body.addEventListener("keyup", handleKeyUp);
		return () =>{ document.body.removeEventListener("keyup", handleKeyUp);}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSlide]);
	
	return projects.length > 1 ? (
		<section className="projectsMain">
			<div className="carousel">
				<div className="carouselTrackContainer">
					<ul className="carouselTrack">
						<li className="carouselSlide">
							<Project
								className="projectContainer"
								id="projectContainer"
								project={projects[currentSlide]}
							/>
							<button
								className="carouselSideButton carouselLeftButton"
								id="carouselLeftButton"
								tabIndex="3"
								onClick={previousSlide}
							>
								<span>&#10094;</span>
							</button>
							<button
								className="carouselSideButton carouselRightButton"
								id="carouselRightButton"
								tabIndex="4"
								onClick={nextSlide}
							>
								<span>&#10095;</span>
							</button>
						</li>
					</ul>
					<div className="carouselNav">
						<button
							className={
								currentSlide === 0
									? "carouselBottomButton currentSlide"
									: "carouselBottomButton"
							}
							id="bottomButton1"
							onClick={jumpToProject0}
						></button>
						<button
							className={
								currentSlide === 1
									? "carouselBottomButton currentSlide"
									: "carouselBottomButton"
							}
							id="bottomButton2"
							onClick={jumpToProject1}
						></button>
						<button
							className={
								currentSlide === 2
									? "carouselBottomButton currentSlide"
									: "carouselBottomButton"
							}
							id="bottomButton3"
							onClick={jumpToProject2}
						></button>
						<button
							className={
								currentSlide === 3
									? "carouselBottomButton currentSlide"
									: "carouselBottomButton"
							}
							id="bottomButton4"
							onClick={jumpToProject3}
						></button>
						<button
							className={
								currentSlide === 4
									? "carouselBottomButton currentSlide"
									: "carouselBottomButton"
							}
							id="bottomButton5"
							onClick={jumpToProject4}
						></button>
					</div>
				</div>
				{/* need a number of buttons equal to the number of slides / may want image preview? */}
			</div>
		</section>
	) : (
		"Loading..."
	);
};

export default ProjectCarousel;