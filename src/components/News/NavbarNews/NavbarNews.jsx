import React from "react";
import "./NavBarStyle.css";
import HOME from "./NavbarIcons/home-icon.png";
import DOWN from "./NavbarIcons/down.png";

export const NavBarNews = (props) => {
    return (
        <div className="navBar">
            <div>
                <nav className="nav" role="navigation">
                    <ul className="nav__list">
                        <li className="nav__list_li">
                            <div>
                                <img src={HOME} alt=""/>
                                <label htmlFor="group-1"><span className="fa fa-angle-right"></span> Home</label>
                            </div>
                        </li>

                        <div>
                        <li className="nav__list_li">
                            <div>
                                <img src={DOWN} alt=""/>
                                <label htmlFor="group-2"><span className="fa fa-angle-right"></span> News categories</label>
                            </div>

                            <input id="group-2" type="checkbox" hidden/>

                            <ul className="group-list">
                                <li>
                                    <li><a href="/#">1999st level item</a></li>
                                    <li><a href="/">1st level item</a></li>
                                </li>
                            </ul>
                        </li>
                        </div>

                        <div>
                            <li className="nav__list_li">
                                <input id="group-3" type="checkbox" hidden/>
                                <label htmlFor="group-3"><span className="fa fa-angle-right"></span> 3First level</label>
                            </li>
                        </div>

                        <div>
                            <li className="nav__list_li">
                                <input id="group-4" type="checkbox" hidden/>
                                <label htmlFor="group-4"><span className="fa fa-angle-right"></span> 4First level</label>
                            </li>
                        </div>
                    </ul>
                </nav>

            </div>
        </div>
    );
}