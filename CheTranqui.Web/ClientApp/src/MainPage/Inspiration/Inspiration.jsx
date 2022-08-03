import React from 'react';
import InspirationProject from './InspirationProject';

import './Inspiration.css';

const Inspiration = () => {

    return (
			<section id="inspiration">
				<h1>What Inspired Me To Become A Developer</h1>
				<div id="myInspirationProjects">
					<InspirationProject type="HotS" />
                    <InspirationProject type="Dragonrealms" />
					<InspirationProject type="Empires" />
				</div>
			</section>
		);
};

export default Inspiration;