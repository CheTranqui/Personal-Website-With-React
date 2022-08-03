import React from 'react';
import './footer.css';

const AfterThought = () => {
    return (
			<React.Fragment>
				<h2 className="afterThought" id="footerNotes">
					Notes:
				</h2>
				<p className="afterThought" id="footerNote1">
					1: "¡Che, tranqui!" is a common phrase heard on the streets of
					Argentina on a daily basis. "Che" is a way to call out to another
					person in the same way as we use "Dude" or "Bro" here in the United
					States. "Tranqui" is a command, short for "tranquilo" meaning relax or
					chill. I've combined the two into an idiomatic expression to imply my
					goal to be a chill, relaxed guy.
			</p>
			<p className="afterThought" id="footerNote2">
				2: There are many stories in the Martian Tribune. Some serious and historical, some silly and built on a game-dependent context. <a href="/MartianTribuneStories/MartianTribuneStories.html" target='_blank'>Here is a small taste</a> of the stories built into the Martian Tribune.
			</p>
			</React.Fragment>
		);
};

export default AfterThought;