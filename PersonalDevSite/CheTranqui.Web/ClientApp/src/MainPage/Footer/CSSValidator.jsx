import React from 'react';

const CSSValidator = () => {

    return (
			<p className="CSSValidator">
				<a href="https://jigsaw.w3.org/css-validator/check/referer">
					<img
						style={{border: 0, width:"88px", height:"31px"}}
						src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
						alt="Valid CSS!"
					/>
				</a>
			</p>
		);
};

export default CSSValidator;