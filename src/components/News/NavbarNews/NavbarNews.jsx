import React from "react";
import "./NavBarStyle.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAppleAlt,
    faChartBar,
    faNewspaper,
    faProjectDiagram,
    faHome,
    faCoins
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import avatar from '../../../backgrounds/tt_avatar_small.jpg'

export const NavBarNews = (props) => {
    return (
        <div class="wrapper">
            <div class="sidebar">
                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '10px'}}>
                        <img style={{maxWidth: '100%', width: '55px', borderRadius: '100%'}} src={avatar} alt=""/>
                    </div>
                    <div>
                        <h2>{props.login}</h2>
                    </div>
                </div>
                <ul>
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
                <div class="social_media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}