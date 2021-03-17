import React, {Fragment} from 'react';
import n from './Navbar.module.css';
import "./Navbar.css";
import logo from '../../backgrounds/myLogo2.png'
import home from './icons/home.png'
import homeLights from './icons/house-white.png'
import search from './icons/search.png'
import searchLight from './icons/lightSearch.png'
import {NavLink} from 'react-router-dom';
import avatar from '../../backgrounds/tt_avatar_small.jpg'
import MenuOutlined from "@ant-design/icons/es/icons/MenuOutlined";
import {Code} from "grommet-icons";
import DarkModeToggle from "../../Dark_Mode/Dark_Mode";
import styled from "styled-components";

const NavbarLinks = styled.a`
  color: ${props => (props.value ? "#e4e4e4" : "#666")};
  font-size: 15px;
  display: block;
  text-align: center;
  padding: 14px 15px;
  text-decoration: none;
  font-weight: 500;
`;

const MainStream = styled.a`
  color: ${props => (props.value ? "#e4e4e4" : "#666")};
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
`;

const UserName = styled.a`
  color: ${props => (props.value ? "#e4e4e4" : "#666")};
  margin-right: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
`;

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navbarItems: [
                {
                    itemName: 'News',
                    classNames: "NavBarli NavBarli-" + this.props.LiItem,
                    href: '/Bitcoin',
                },
                {
                    itemName: 'Profile',
                    classNames: "NavBarli NavBarli-" + this.props.LiItem,
                    href: '/#',
                },
                {
                    itemName: 'Lessons',
                    classNames: "NavBarli NavBarli-" + this.props.LiItem,
                    href: '/Lesson/Introduction',
                },
            ]
        }
    }

    render() {
        const style = this.props.style;

        const navbarItems = this.state.navbarItems.map((item, index) => {
                return <nav style={{marginLeft: '20px'}}>
                    <ul className={`${n.nav__links} ${n.center_links}`}>
                        <li className={item.itemName}>
                            <NavbarLinks value={this.props.value} href={item.href}>{item.itemName}</NavbarLinks>
                        </li>
                    </ul>
                </nav>
            }
        )
        return (
            <Fragment>
                <div>
                    <header className={"headlineHeader headlineHeader-" + this.props.headerMobile}>
                        <div style={style} className={"LogoDivContainer LogoDivContainer-" + this.props.color}>
                            <div>
                                <NavLink className={n.logo} to={'/content'}>
                                    <img src={logo} alt="logo"/>
                                </NavLink>
                            </div>
                            <div className={"ContentLessonMobileNavbarIconContainer LessonMobileNavbarIconContainer-" + this.props.NavbarMobileIconsBlock}>
                                <div style={{marginRight: "10px"}}>
                                    <Code title={"Open courses"} onClick={() => {
                                        this.props.showsidebarMobile()
                                    }} className={`${n.LessonMobileNavbarIcon} ${n.mobileIcon}`}/>
                                </div>
                                <div>
                                    <MenuOutlined title={"Menu"} onClick={() => {
                                        this.props.menuMobileIsOpen()
                                    }} className={n.LessonMobileNavbarIcon}/>
                                </div>
                            </div>
                        </div>
                        <div className={"centerHeadlineNavbarColumn centerHeadlineNavbarColumn-" + this.props.centerHeadlineNavbarColumn}>
                            <div className={"navbarHomePage navbarHomePage-" + this.props.navbarHomePage}>
                                <nav>
                                    <ul className={n.nav__links}>
                                        <a className={n.navElements} href="/#">
                                            {
                                                this.props.value ?
                                                    <img className={n.home} src={homeLights} alt="home"/>
                                                    :
                                                    <img className={n.home} src={home} alt="home"/>
                                            }
                                        </a>
                                        <li>
                                            <MainStream value={this.props.value} className={"MainStream-" + this.props.MainStream} href="/#">Main
                                                Stream</MainStream>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={"centerNavbarColumn centerNavbarColumn-" + this.props.centerFlexNavbarContainer}>
                                {navbarItems}
                            </div>

                            <div className={"navbarSearchPage navbarSearchPage-" + this.props.navbarSearchPage}>
                                <div>
                                    <a className={`${n.navElements} ${n.search}`} href="/#">
                                        {
                                            this.props.value ? <img width="20" src={searchLight} alt="search"/> : <img width="20" src={search} alt="search"/>
                                        }
                                    </a>
                                </div>

                                <div>
                                    <a className={n.cta} href="/#">Search</a>
                                </div>

                                <div className={`${n.navElements} ${n.notification}`}>
                                    <DarkModeToggle/>
                                </div>
                            </div>
                        </div>

                        <div className={"avatar_and_user_text avatar_and_user_text-" + this.props.bg}>
                            <div>
                                <p style={{color: 'yellow'}} className="menu cta">
                                    {
                                        this.props.isAuth ?
                                            <UserName value={this.props.value} href={"/profile/" + this.props.id}
                                                      className={n.user_name}>{this.props.login}</UserName>
                                            :
                                            <UserName value={this.props.value} href="/#">{"login"}</UserName>
                                    }
                                </p>
                            </div>
                            <div>
                                <img style={{width: '40px', borderRadius: '15px'}} src={avatar} alt=""/>
                            </div>
                        </div>
                    </header>
                </div>
            </Fragment>
        );
    }
}