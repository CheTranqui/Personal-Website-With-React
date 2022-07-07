import React, {useState} from 'react';

const ScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState("none");

    window.onscroll = function(){
        toggleScrollToTopButton();
    }

    const toggleScrollToTopButton = () => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            setShowScrollToTop("inline-block");
        }
        else {
            setShowScrollToTop("none");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    const scrollToTopOfPage = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        toggleScrollToTopButton();
    }

    return (
        <button
            className="carouselSideButton pageNav"
            id="scrollToTopButton"
            tabindex="15"
            onClick={scrollToTopOfPage}
            style={{display: showScrollToTop}}
        >
            <span>&#10095;</span>
        </button>
    );
};

export default ScrollToTop;