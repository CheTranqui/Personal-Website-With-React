import React, {useState} from 'react';
import './Navigation.css';

const ContactMe = (props) =>
{
    const [mail, setMail] = useState(false);
    const [showCopyNotification, setShowCopyNotification] = useState(false);

    let copyNotificationleftOffset = props.navWidth / 2;

    const updateMail = () => {
        setMail(!mail);
    }

    const copyToClipboard = () => {
        //confirm permission to write to clipboard
        navigator.permissions
            .query({ name: "clipboard-write" })
            .then((result) => {
                //if so copy email address and let user know
                if (result.state === "granted" || result.state === "prompt") {
                    navigator.clipboard
                        .writeText("chetranqui@gmail.com")
                        .then(function () {
                            displayCopyPrompt();
                            //if not on desktop, then always open mail app
                        })
                        .catch(function () {
                            openMailTo();
                        });
                }
                // if checking permissions causes error (i.e. user's on Firefox):
            })
            .catch(function () {
                displayCopyPrompt();
            });
        updateMail();
    }

    const openMailTo = () => {
        let mail = document.createElement("a");
        mail.href = "mailto:chetranqui@gmail.com";
        mail.click();
        updateMail();
        hideCopyPrompt();
    }

    const displayCopyPrompt = () => {
        setShowCopyNotification(true);
        setTimeout(function () {
            hideCopyPrompt();},
            3500);
    }

    const hideCopyPrompt = () => {
        setShowCopyNotification(false);
    }
        
    return (
			<React.Fragment>
				{showCopyNotification && (
					<p
						id="copyNotification"
						style={{
							left: copyNotificationleftOffset,
							transform: "translateX(-50%)",
							display: "inline",
						}}
					>
						"chetranqui@gmail.com" has been copied to clipboard. Click again to
						open email program.
					</p>
				)}
				<nav className="navBar" id="navMenu">
					<ul className="navList" id="navMenuList">
						<li className="navMenuItem">
							<button
								className="navLink emailMe"
								id="emailMeLink"
								tabIndex="2"
								onClick={mail ? openMailTo : copyToClipboard}
							>
								Contact Me
							</button>
						</li>
					</ul>
				</nav>
			</React.Fragment>
		);
}

export default ContactMe;