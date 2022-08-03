import React, {createContext, useReducer} from 'react';

export const DarkModeContext = createContext();

const initialState = {
    darkMode: false,
}

const darkModeReducer = (state, action) => {
    switch (action.type){
        case "lightMode":
            activateLightMode();
            return {darkMode: false};
        case "darkMode":
            activateDarkMode();
            return {darkMode: true};
        default:
            return state;
    }
};

const activateLightMode = () => {
    const rootStyle = document.documentElement.style;
	//light mode colors
	rootStyle.setProperty("--color-primaryBackground", "#fff");
	rootStyle.setProperty("--color-secondaryBackground", "#eee");
	rootStyle.setProperty("--color-primaryTitle", "#38a2c2");
	rootStyle.setProperty("--color-primaryText", "#123");
	rootStyle.setProperty("--color-fadedText", "#666");
	rootStyle.setProperty("--color-links", "#01afa7");
	rootStyle.setProperty("--color-inlineLinks", "#01c8bf");
	rootStyle.setProperty("--color-carouselButtons", "rgba(200,200,200,0.6)");
	rootStyle.setProperty("--color-carouselButtonText", "darkgray");
}

const activateDarkMode = () => {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--color-primaryBackground", "#123");
    rootStyle.setProperty("--color-secondaryBackground", "#222");
    rootStyle.setProperty("--color-primaryTitle", "#38a2c2");
    rootStyle.setProperty("--color-primaryText", "#f0f8ff");
    rootStyle.setProperty("--color-fadedText", "#808080");
    rootStyle.setProperty("--color-links", "#1ec8af");
    rootStyle.setProperty("--color-inlineLinks", "#9CFFDE");
    rootStyle.setProperty("--color-carouselButtons", "rgba(255,255,255,0.3)");
    rootStyle.setProperty("--color-carouselButtonText", "black");
}

export function DarkModeProvider(props){
    const [state, dispatch] = useReducer(darkModeReducer, initialState);

    return <DarkModeContext.Provider value={{state, dispatch}}>{props.children}</DarkModeContext.Provider>
}