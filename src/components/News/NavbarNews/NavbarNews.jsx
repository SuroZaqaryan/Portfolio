import React, {useState, useEffect} from "react";
import "./NavBarStyle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

                    <ul className="navbar">
                        <li>
                            <NavLink to={"/content"}>
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
                <div className="social_media">
                    <NavLink to={"/#"}><i className="fab fa-facebook-f"></i></NavLink>
                    <NavLink to={"/#"}><i className="fab fa-twitter"></i></NavLink>
                    <NavLink to={"/#"}><i className="fab fa-instagram"></i></NavLink>
                </div>
            </div>
        </div>
    );
}