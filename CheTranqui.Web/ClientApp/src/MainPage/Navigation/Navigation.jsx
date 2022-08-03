import React, {useEffect, useRef, useState} from 'react';
import './Navigation.css';
import '../style.css';

import SocialMediaDropdown from './SocialMediaDropdown';
import ContactMe from './ContactMe';
import DarkModeSelector from './DarkModeSelector';

const Navigation = () =>
{
    const ref = useRef(null);
    const [navWidth, setNavWidth] = useState(0);

    useEffect(() => {
        setNavWidth(ref.current.offsetWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => {
        setNavWidth(ref.current.offsetWidth);
    }

    return (
        <div id="navContainer" ref={ref}>
            <SocialMediaDropdown/>
            <ContactMe navWidth={navWidth}/>
            <DarkModeSelector />
        </div>
    );
}

export default Navigation;