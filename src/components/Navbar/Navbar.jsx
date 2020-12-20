import React, { Fragment } from 'react';
import n from './Navbar.module.css';
import "./Navbar.css";
import logo from '../../backgrounds/myLogo2.png'
import home from './icons/home.png'
import search from './icons/search.png'
import notification from './icons/notification.png'
import { NavLink } from 'react-router-dom';
import avatar from '../../backgrounds/tt_avatar_small.jpg'
import MenuOutlined from "@ant-design/icons/es/icons/MenuOutlined";
import {Code} from "grommet-icons";

export class Navbar extends React.Component {

    render() {
        const style = this.props.style;
        return (
            <Fragment>
                <div>
                    <header>
                        <div style={style} className={"LogoDivContainer LogoDivContainer-" + this.props.color}>
                            <div>
                                <NavLink className={n.logo} to={'/content'}>
                                    <img src={logo} alt="logo" />
                                </NavLink>
                            </div>
                            <div className={"ContentLessonMobileNavbarIconContainer LessonMobileNavbarIconContainer-" + this.props.NavbarMobileIconsBlock}>
                                <div style={{ marginRight: "10px" }}>
                                    <Code title={"Open courses"} onClick={() => { this.props.showsidebarMobile() }} className={`${n.LessonMobileNavbarIcon} ${n.mobileIcon}`} />
                                </div>
                                <div>
                                    <MenuOutlined title={"Menu"} onClick={() => { this.props.menuMobileIsOpen() }} className={n.LessonMobileNavbarIcon} />
                                </div>
                            </div>

                        </div>
                        <div
                            className={"centerHeadlineNavbarColumn centerHeadlineNavbarColumn-" + this.props.centerHeadlineNavbarColumn}>
                            <div className={"navbarHomePage navbarHomePage-" + this.props.navbarHomePage}>
                                <nav>
                                    <ul className={n.nav__links}>
                                        <a className={n.navElements} href="/#">
                                            <img className={n.home} src={home} alt="home" />
                                        </a>
                                        <li><a className={"MainStream MainStream-" + this.props.MainStream} href="/#">Main
                                            Stream</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={"centerNavbarColumn centerNavbarColumn-" + this.props.centerFlexNavbarContainer}>
                                <nav style={{ marginLeft: '20px' }}>
                                    <ul className={`${n.nav__links} ${n.center_links}`}>
                                        <li className={"NavBarli NavBarli-" + this.props.LiItem}><NavLink
                                            to={'/Bitcoin'}>News</NavLink></li>
                                        <li className={"NavBarli NavBarli-" + this.props.LiItem}><NavLink
                                            to={'/#'}>Profile</NavLink></li>
                                        <li className={"NavBarli NavBarli-" + this.props.LiItem}><NavLink
                                            to={'/Lessons'}>Lessons</NavLink></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={"navbarSearchPage navbarSearchPage-" + this.props.navbarSearchPage}>
                                <div>
                                    <a className={`${n.navElements} ${n.search}`} href="/#">
                                        <img width="20" src={search} alt="search" />
                                    </a>
                                </div>

                                <div>
                                    <a className={n.cta} href="/#">Search</a>
                                </div>

                                <div>
                                    <a className={`${n.navElements} ${n.notification}`} href="/#">
                                        <img width="20" src={notification} alt="notification" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={"avatar_and_user_text avatar_and_user_text-" + this.props.bg}>
                            <div>
                                <p style={{ color: 'yellow' }} className="menu cta">
                                    {
                                        this.props.isAuth ?
                                            <NavLink to={"/profile/" + this.props.id}
                                                className={n.user_name}>{this.props.login}</NavLink>
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
}