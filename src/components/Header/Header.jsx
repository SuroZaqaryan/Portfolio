import React, { Fragment } from 'react';
import HeaderStyle from "./Header.module.css";

export const Header = (props) => {
    return (
        <Fragment>
            <ul className={HeaderStyle.ul}>
                <li><a class="active" href="/#">Home</a></li>
                <li><a href="/#">News</a></li>
                <li><a href="/#">Contact</a></li>
                <li><a href="/#">About</a></li>
            </ul>
        </Fragment>
    );
}