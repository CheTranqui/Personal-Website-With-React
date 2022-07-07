import React from 'react';
import './Navigation.css';

import SocialMediaSelectItem from './SocialMediaSelectItem';

const SocialMediaSelect = () =>
{
    return (
			<ul className="navList" id="socialMediaDropdownList">
				<SocialMediaSelectItem type="Github" />
				<SocialMediaSelectItem type="YT" />
                <SocialMediaSelectItem type="Twitch" />
                <SocialMediaSelectItem type="Twitter" />
                <SocialMediaSelectItem type="LinkedIn" />
			</ul>
		);
}

export default SocialMediaSelect;