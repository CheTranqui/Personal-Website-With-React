import { DarkModeProvider } from './Context/DarkModeContext';
import Navigation from './MainPage/Navigation/Navigation';
import Introduction from './MainPage/Introduction';
import Projects from './MainPage/Projects/Projects.jsx'
import Inspiration from './MainPage/Inspiration/Inspiration';
import AfterThought from './MainPage/Footer/AfterThought';
import CSSValidator from './MainPage/Footer/CSSValidator';
import FloatingChe from './MainPage/Footer/FloatingChe';
import ScrollToTop from './MainPage/ScrollToTop';

import './MainPage/style.css';
import React from 'react';

function App() {

	return (
		<div className="App">
			<DarkModeProvider>
				<Navigation />
				<main>
					<Introduction />
					<Projects />
					<Inspiration />
					<FloatingChe />
				</main>
				<footer>
					<AfterThought />
					<CSSValidator />
				</footer>
			</DarkModeProvider>
			<ScrollToTop />
		</div>
	);
}

export default App;