import React, {useContext} from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './Navigation.css';

const SocialMediaSelectItem = (props) =>
{
    const colorScheme = useContext(DarkModeContext);

    const linkClass = "socialMediaDropdown" + props.type;
    const linkId = "socialMediaDropdown" + props.type + "Link";
    const imageClass = "socialMediaDropdown" + props.type + "Image";

    let linkHref;
    let imagePath;
    let socialMediaButtonText;
    switch (props.type){
        case "Github":
            linkHref = "https://github.com/CheTranqui";
            if (!colorScheme.state.darkMode){
                imagePath = "GitHub-Mark-120px-plus.png";
            }
            else{
                imagePath = "GitHub-Mark-Light-120px-plus.png";
            }
            socialMediaButtonText = "Github";
            break;
        case "YT":
            linkHref = "https://www.youtube.com/channel/UC43wbpw02ZIYkhes0O70IVg";
            imagePath = "youtube_social_icon_red.png";
            socialMediaButtonText = "YouTube";
            break;
        case "Twitch":
            linkHref = "https://www.twitch.tv/chetranqui";
            imagePath = "TwitchGlitchPurple.png";
            socialMediaButtonText = "Twitch";
            break;
        case "Twitter":
            linkHref = "https://twitter.com/CheTranqui";
            if (!colorScheme.state.darkMode){
                imagePath = "2021-Twitter-logo-blue.png";
            }
            else {
                imagePath = "2021-Twitter-logo-white.png";
            }
            socialMediaButtonText = "Twitter";
            break;
        case "LinkedIn":
            linkHref = "https://www.linkedin.com/in/chaz-peterson-1a8751142";
            imagePath = "LI-In-Bug.png";
            socialMediaButtonText = "LinkedIn"
            break;
                    
        default:
    }

    return (
			<li className="socialMediaDropdownItem">
				<a
					className={"socialMediaDropdownLink " + linkClass}
					id={linkId}
					href={linkHref}
					target="_blank"
                    rel="noopener noreferrer"
				>
					<img
						className={"socialMediaDropdownImage " + linkClass}
						id={imageClass}
						src={require("../../images/socialMediaIcons/" + imagePath)}
						alt= {props.type + " Icon"}
					/>
					<span className="socialMediaDropdownText " id={"socialMedia" + props.type + "Text"}>
						{socialMediaButtonText}
					</span>
				</a>
			</li>
		);
}

export default SocialMediaSelectItem;