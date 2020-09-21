import React, { Fragment } from 'react';
import HeaderStyle from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <Fragment>
            <ul className={HeaderStyle.ul}>
                <li><NavLink to={'content'} className={HeaderStyle.active}>Sign in</NavLink></li>
                <li><a href="/#">News</a></li>
                <li><a href="/#">Contact</a></li>
                <li><a href="/#">About</a></li>
            </ul>
        </Fragment>
    );
}