import React, { Fragment } from 'react';
import HeaderStyle from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {AiFillGithub} from "react-icons/all";

export const Header = (props) => {
    return (
        <Fragment>
            <div>
                <ul className={HeaderStyle.ul}>
                    <li className={HeaderStyle.active}>
                        <div style={{marginTop: "5px"}}>
                            <AiFillGithub size={25} color={"#ffffff"}/>
                        </div>
                        <div>
                            <NavLink to={'content'}>Sign in</NavLink>
                        </div>
                    </li>
                    <li><a href="/#">News</a></li>
                    <li><a href="/#">Contact</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Team</a></li>
                </ul>
            </div>

            <div>
                <ul className={HeaderStyle.ul}>
                    <li><a href="content">Sign in</a></li>
                    <li style={{border: "1px solid #ffffff", borderRadius: "3px"}}><a href="/#">Sign up</a></li>
                </ul>
            </div>
        </Fragment>
    );
}