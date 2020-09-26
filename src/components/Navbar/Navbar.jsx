import React, { Fragment } from 'react';
import n from './Navbar.module.css';
import logo from '../../backgrounds/logo.svg'
import home from './icons/home.png'
import search from './icons/search.png'
import notification from './icons/notification.png'
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <Fragment> 
            <div>
                <header>
                    <div style={{ flex: '1' }}>
                        <a className={n.logo} href="/#"><img src={logo} alt="logo" /></a>
                    </div>
                    <div style={{ flex: '2' }}>
                        <nav>
                            <ul className={n.nav__links}>
                                <a className={n.navElements} href="/#">
                                    <img className={n.home} src={home} alt="home" />
                                </a>
                                <li><a style={{color: 'black'}} href="/#">Main Stream</a></li>
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
                    <div style={{ flex: '1' }}>
                        <p style={{ color: 'yellow' }} className="menu cta">
                            {props.isAuth ? <NavLink to="/#" className={n.user_name}>{props.login}</NavLink> : <NavLink to="/#">Login</NavLink>}
                        </p>
                    </div>
                </header>
            </div>
        </Fragment>
    );
}