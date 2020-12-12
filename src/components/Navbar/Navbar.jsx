import React, { Fragment } from 'react';
import n from './Navbar.module.css';
import "./Navbar.css";
import logo from '../../backgrounds/myLogo2.png'
import home from './icons/home.png'
import search from './icons/search.png'
import notification from './icons/notification.png'
import { NavLink } from 'react-router-dom';
import avatar from '../../backgrounds/tt_avatar_small.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";

export const Navbar = (props) => {
    const style = props.style;
    return (
        <Fragment>
            <div>
                <header>
                    <div style={style} className={"LogoDivContainer LogoDivContainer-" + props.color}>
                        <div>
                            <FontAwesomeIcon style={{color: "#9dffb6"}} icon={faCheckCircle}/>
                        </div>
                        <NavLink className={n.logo} to={'/content'}>
                            <img src={logo}
                                alt="logo" />
                        </NavLink>
                    </div>
                    <div className={"centerHeadlineNavbarColumn centerHeadlineNavbarColumn-" + props.centerHeadlineNavbarColumn}>
                        <div className={"navbarHomePage navbarHomePage-" + props.navbarHomePage}>
                            <nav>
                                <ul className={n.nav__links}>
                                    <a className={n.navElements} href="/#">
                                        <img className={n.home} src={home} alt="home" />
                                    </a>
                                    <li><a className={"MainStream MainStream-" + props.MainStream} href="/#">Main Stream</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className={"centerNavbarColumn centerNavbarColumn-" + props.centerFlexNavbarContainer}>
                            <nav style={{ marginLeft: '20px' }}>
                                <ul className={`${n.nav__links} ${n.center_links}`}>
                                    <li className={"NavBarli NavBarli-" + props.LiItem}><NavLink to={'/Bitcoin'}>News</NavLink></li>
                                    <li className={"NavBarli NavBarli-" + props.LiItem}><NavLink to={'/#'}>Profile</NavLink></li>
                                    <li className={"NavBarli NavBarli-" + props.LiItem}><NavLink to={'/Lessons'}>Lessons</NavLink></li>
                                </ul>
                            </nav>
                        </div>

                        <div className={"navbarSearchPage navbarSearchPage-" + props.navbarSearchPage}>
                            <div>
                                <a className={`${n.navElements} ${n.search}`} href="/#">
                                    <img style={{ width: '20px' }} src={search} alt="search" />
                                </a>
                            </div>

                            <div>
                                <a className={n.cta} href="/#">Search</a>
                            </div>

                            <div>
                                <a className={`${n.navElements} ${n.notification}`} href="/#">
                                    <img style={{ width: '20px' }} src={notification} alt="notification" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={"avatar_and_user_text avatar_and_user_text-" + props.bg}>
                        <div>
                            <p style={{ color: 'yellow' }} className="menu cta">
                                {
                                    props.isAuth ?
                                        <NavLink to={"/profile/" + props.id}
                                            className={n.user_name}>{props.login}</NavLink>
                                        :
                                        <NavLink to="/#">{"login"}</NavLink>
                                }
                            </p>
                        </div>
                        <div>
                            <img style={{ width: '40px', borderRadius: '15px' }} src={avatar} alt="" />
                        </div>
                    </div>
                </header>
            </div>
        </Fragment>
    );
}