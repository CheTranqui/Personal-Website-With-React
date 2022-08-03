import React, {useContext} from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';

import "./Navigation.css";

const DarkModeSelector = () => {
const colorScheme = useContext(DarkModeContext);

const toggleDarkMode = () => {
    if (colorScheme.state.darkMode){
        colorScheme.dispatch({type: "lightMode"});
    }
    else {
        colorScheme.dispatch({type: "darkMode"});
    }
}

    return(
        <div className="modeContainer">
            <label className="modeLabel" id="modeLabel">
                <span>Dark Mode:</span>
                <input type="checkbox" className="modeCheckbox" id="modeCheckbox" onClick={toggleDarkMode}/>
                <span className="slider" id="modeSlider"></span>
            </label>
        </div>
    );
}

export default DarkModeSelector;