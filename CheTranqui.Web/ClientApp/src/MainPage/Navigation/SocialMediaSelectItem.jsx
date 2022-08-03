import React, {useContext} from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './Navigation.css';

import GitHubDarkImage from "../../images/socialMediaIcons/GitHub-Mark-120px-plus.png";
import GitHubLightImage from "../../images/socialMediaIcons/GitHub-Mark-Light-120px-plus.png";
import YouTubeImage from "../../images/socialMediaIcons/youtube_social_icon_red.png";
import TwitchImage from "../../images/socialMediaIcons/TwitchGlitchPurple.png";
import TwitterBlueImage from "../../images/socialMediaIcons/2021-Twitter-logo-blue.png";
import TwitterWhiteImage from "../../images/socialMediaIcons/2021-Twitter-logo-white.png";
import LinkedInImage from "../../images/socialMediaIcons/LI-In-Bug.png";

const SocialMediaSelectItem = (props) =>
{
    const colorScheme = useContext(DarkModeContext);

    const linkClass = "socialMediaDropdown" + props.type;
    const linkId = "socialMediaDropdown" + props.type + "Link";
    const imageClass = "socialMediaDropdown" + props.type + "Image";

    let linkHref;
    let imageSource;
    let socialMediaButtonText;
    switch (props.type){
        case "Github":
            linkHref = "https://github.com/CheTranqui";
            if (!colorScheme.state.darkMode){
                imageSource = GitHubDarkImage;
            }
            else{
                imageSource = GitHubLightImage;
            }
            socialMediaButtonText = "Github";
            break;
        case "YT":
            linkHref = "https://www.youtube.com/channel/UC43wbpw02ZIYkhes0O70IVg";
            imageSource = YouTubeImage;
            socialMediaButtonText = "YouTube";
            break;
        case "Twitch":
            linkHref = "https://www.twitch.tv/chetranqui";
            imageSource = TwitchImage;
            socialMediaButtonText = "Twitch";
            break;
        case "Twitter":
            linkHref = "https://twitter.com/CheTranqui";
            if (!colorScheme.state.darkMode){
                imageSource = TwitterBlueImage;
            }
            else {
                imageSource = TwitterWhiteImage;
            }
            socialMediaButtonText = "Twitter";
            break;
        case "LinkedIn":
            linkHref = "https://www.linkedin.com/in/chaz-peterson-1a8751142";
            imageSource = LinkedInImage;
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
						src={imageSource}
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