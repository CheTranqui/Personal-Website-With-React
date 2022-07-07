import React, {useState} from 'react';
import SocialMediaSelect from "./SocialMediaSelect";

import './Navigation.css';



const SocialMediaDropdown = () => 
{
    const [active, setActive] = useState(false);

    const toggleDropdown = () => {
        setActive(!active);
    };

    return (
        <nav className="navBar" id="socialMediaNavBar">
            <div id="socialMediaDisplay">
                <button
                    onClick={toggleDropdown}
                    className="navLink socialMediaDropdownButton"
                    id="socialMediaDropdownLink"
                    tabIndex="1"
                >
                    CheMedia
                </button>
                {active && 
                    <div
                        className="socialMedia socialMediaDropdownBackground"
                        id="socialMediaDropdownDiv"
                    >
                        <SocialMediaSelect />
                    </div>
                }
            </div>
        </nav>
    );
};

export default SocialMediaDropdown;