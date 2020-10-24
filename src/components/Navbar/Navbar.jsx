import React, { Fragment } from 'react';
import n from './Navbar.module.css';
import logo from '../../backgrounds/myLogo.png'
import home from './icons/home.png'
import search from './icons/search.png'
import notification from './icons/notification.png'
import { NavLink } from 'react-router-dom';
import avatar from '../../backgrounds/tt_avatar_small.jpg'

export const Navbar = (props) => {
    return (
        <Fragment>
            <div>
                <header>
                    <div style={{ flex: '1' }}>
                        <a className={n.logo} href="/#"><img style={{ margin: 'auto' }} src={logo} alt="logo" /></a>
                    </div>
                    <div style={{ flex: '1' }}>
                        <nav>
                            <ul className={n.nav__links}>
                                <a className={n.navElements} href="/#">
                                    <img className={n.home} src={home} alt="home" />
                                </a>
                                <li><a href="/#">Main Stream</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div style={{ flex: '2', display: 'flex', justifyContent: 'center' }}>
                        <nav style={{ marginLeft: '20px' }}>
                            <ul className={`${n.nav__links} ${n.center_links}`}>
                                <li> <NavLink to={'/news'}>News</NavLink> </li>
                                <li> <NavLink to={'/#'}>Blog</NavLink> </li>
                                <li> <NavLink to={'/#'}>Log out</NavLink> </li>
                            </ul>
                        </nav>
                    </div>

                    <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
                        <a className={`${n.navElements} ${n.search}`} href="/#">
                            <img style={{ width: '20px' }} src={search} alt="search" />
                        </a>

                        <a className={n.cta} href="/#">Create Scene</a>

                        <a className={`${n.navElements} ${n.notification}`} href="/#">
                            <img style={{ width: '20px' }} src={notification} alt="notification" />
                        </a>
                    </div>
                    <div className={n.avatar_and_user_text}>
                        <div>
                            <p style={{ color: 'yellow' }} className="menu cta">
                                {
                                    props.isAuth ?
                                        <NavLink to={"/profile/" + props.id} className={n.user_name}>{props.login}</NavLink>
                                        :
                                        <NavLink to="/#">Login</NavLink>
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