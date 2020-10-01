import React from "react";
import ContentStyle from "./Content.module.css";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import { Courses } from "./Courses/Courses";
import {Achievements} from "./Achievements/Achievements";

export class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            procent: 20,
        }
    }

    render() {

        return (
            <div id={ContentStyle.content}>
                <NavbarContainer />
                <div className={ContentStyle.container}>
                    <div className={ContentStyle.leftColumn}>
                        <div className={ContentStyle.languagesTitle}>
                            <p>My Courses</p>
                        </div>

                        <Courses />
                    </div>
                    <div className={ContentStyle.centerColumn}>
                        <Achievements />
                    </div>
                    <div className={ContentStyle.rightColumn}>
                        <div>
                            <p style={{ textAlign: 'left', fontWeight: '600' }}>Popular users</p>
                        </div>
                        <UsersContainer />
                    </div>
                </div>
            </div>
        );
    }
}