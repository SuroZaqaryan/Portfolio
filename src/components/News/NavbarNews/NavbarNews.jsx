import React from "react";
import "./NavBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faChartBar, faNewspaper, faProjectDiagram, faHome} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const NavBarNews = (props) => {
    return (
        <div class="wrapper">
            <div class="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className="navbarIcon" icon={faHome} />Home
                        </a>
                    </li>
                    <li>
                        <NavLink to={"/Business"}>
                            <FontAwesomeIcon className="navbarIcon" icon={faChartBar} />Business
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className="navbarIcon" icon={faAppleAlt} />Apple
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className="navbarIcon" icon={faProjectDiagram} />TechCrunch
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon className="navbarIcon" icon={faNewspaper} />Wall Street
                        </a>
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