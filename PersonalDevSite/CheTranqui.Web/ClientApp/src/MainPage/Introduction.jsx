import React from 'react';

import './style.css';

const Introduction = () => {
    return (
			<article className="introductionArticle">
				{/* <section class="introductionSection" id="introductionTitleSection">
					<h1 class="introductionTitle"></h1>
				</section> */}
				<section className="introductionSection" id="introductionTextSection">
					<p className="introductionText">
						I'm Chaz, known across the web as CheTranqui
						<a href="#footerNotes" className="superScript inlineLink">
							<sup>1</sup>
						</a>
						. I began my journey into Software Development informally in 2017 in
						pursuit of another way to improve at a game I played at the time
						(Heroes of the Storm). I've been drawn to programming ever since. I
						have experience with Java, C#, and JavaScript and can't wait to get
						started in this new career.
					</p>
				</section>
			</article>
		);
}

export default Introduction;