import React from 'react';
import HotSPreview from '../../images/inspirationImages/HotSMinigamePreview.jpg';
import DragonrealmsPreview from '../../images/inspirationImages/DragonrealmsPreview.jpg';
import EmpiresAndPuzzlesWikiPreview from '../../images/inspirationImages/EmpiresAndPuzzlesWikiPreview.jpg';

import './Inspiration.css';

const InspirationProject = (props) => {
    let proj = {
		title: "",
		description: "",
		imagePath: "",
		imageAlt: "",
        imageId: "",
		link1: "",
		link1Text: "",
        link2: "",
        link2Text: ""
	};

    const populateHotSProject = () => {
		proj.title = "HotS Drafting Minigame";
		proj.description =
		"To help me learn how to draft better in Heroes of the Storm I created a minigame that would let me draft against professional teams and critique my choices. Most people start off with 'Hello World', I started off with C#, Unity, and how to import data from a JSON file.";
		proj.imagePath = HotSPreview;
		proj.imageAlt = "Heroes of the Storm App Preview";
		proj.link1 = "https://github.com/CheTranqui/HotS-Drafting-Minigame";
		proj.link1Text = "Github";
		proj.link2 =
			"https://drive.google.com/file/d/1fdf6VtAxig_gEylEyDo641TbCXmTWLDF/view";
		proj.link2Text = "Download";
	};

    const populateDragonrealmsProject = () => {
		proj.title = "Dragonrealms";
		proj.description =
			"I played Dragonrealms (a MUD) during my teenage years and revisited it again in 2018. To make travel quicker and simpler I made a script called \"Go Anywhere\". It uses pivot points that are connected via major corridors, and moves the character using a destination variable (%D) where %Dto%D results in arrival. It has approximately 300 starting and ending locations and starts by typing \".go place\". It also has an in-game menu and directions on arrival.";
		proj.imagePath = DragonrealmsPreview;
		proj.imageAlt = "Dragonrealms Script Preview";
        proj.imageId = "dragonrealmsImage";
		proj.link1 = "https://elanthipedia.play.net/Go_Anywhere_*KS*_(script)";
		proj.link1Text = "Go Script";
		proj.link2 = "https://elanthipedia.play.net/User:KASHNA";
		proj.link2Text = "More Scripts";
	};

    const populateEmpiresProject = () => {
        proj.title = "E&P Wiki";
        proj.description =
            'In 2018 I was enjoying a newer game called Empires & Puzzles. Documentation was sparce as it only had a basic wiki (90 pages, all incomplete hero cards). Over the next 4 months I created over 300 pages, organizing the content into small logical pieces and building the backbone of what it is today. When I started it got less than 1000 views per month. In January of 2021 it had over 600,000 views.';
		proj.imagePath = EmpiresAndPuzzlesWikiPreview;
        proj.imageAlt = "Empires and Puzzles Wiki Preview";
        proj.imageId = "";
        proj.link1 = "https://empiresandpuzzles.fandom.com/wiki/Home";
        proj.link1Text = "E&P Wiki";
        proj.link2 = "";
        proj.link2Text = "";
    };

    switch (props.type) {
        case "HotS":
            populateHotSProject();
            break;
        case "Dragonrealms":
            populateDragonrealmsProject();
            break;
        case "Empires":
            populateEmpiresProject();
            break;
        default:
    }


    return ( proj.title.length > 1 ? 
        <article className="inspirationProject" id="inspirationOne">
			<section className="inspirationPreview">
				<figure>
					<img
						className="inspirationImage"
						src={proj.imagePath}
						alt={proj.imageAlt}
                        id={proj.imageId}
					/>
					<figcaption className="inspirationCaption">
						<h2>{proj.title}</h2>
					</figcaption>
				</figure>
			</section>
			<section className="inspirationDescription">
				<p className="inspirationText">
					{proj.description}
				</p>
			</section>
			<section className="inspirationLinks">
				<a
					className={"inspirationLink inspirationLinkTo" + proj.link1Text}
					href={proj.link1}
					target="_blank"
					rel="noreferrer"
					tabindex="8"
				>
					{proj.link1Text}
				</a>
                {proj.link2Text.length > 1 ?
				<a
						className={"inspirationLink inspirationLinkTo" + proj.link2Text}
					href={proj.link2}
					target="_blank"
					rel="noreferrer"
					tabindex="10"
				>
					{proj.link2Text}
				</a> : null }
			</section>
		</article> : null 
    );
};

export default InspirationProject;