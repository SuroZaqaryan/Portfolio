import React, {useState, useEffect} from "react";
import "./NavBarStyle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Gradient} from 'react-gradient';

import {
    faAppleAlt,
    faChartBar,
    faNewspaper,
    faProjectDiagram,
    faHome,
    faCoins, faBars
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import avatar from '../../../backgrounds/tt_avatar_small.jpg'
import CSSTransition from "react-transition-group/cjs/CSSTransition";

export const NavBarNews = (props) => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="avatar_login">
                    <div>
                        <img src={avatar} alt=""/>
                    </div>
                    <div>
                        <div className="login_name">
                            <h2 className={"profileName"}>{props.login}</h2>
                        </div>
                        <li className={"btnMobile"}>
                            <div>
                                <FontAwesomeIcon onClick={toggleNav} className="navbarIconBar" icon={faBars}/>
                            </div>
                        </li>
                    </div>
                </div>
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <ul className="navbar">
                        <li>
                            <NavLink to={"/Home"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faHome}/>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Bitcoin"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faCoins}/>Bitcoin
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Business"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faChartBar}/>Business
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Apple"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faAppleAlt}/>Apple
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/TechCrunch"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faProjectDiagram}/>TechCrunch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/WallSreet"}>
                                <FontAwesomeIcon className="navbarIcon" icon={faNewspaper}/>Wall Street
                            </NavLink>
                        </li>
                    </ul>
                </CSSTransition>
                <div class="social_media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}