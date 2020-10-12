import React from "react";
import ContentStyle from "./Content.module.css";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import {Courses} from "./Courses/ProgressCourses/Courses";
import {Achievements} from "./Achievements/Achievements";
import {AboutInfo} from "./About_App/About_Info";
import {ContentCourses} from "./Courses/ContentCourses/ContentCourses";

export class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            procent: 20,
        }
    }

    render() {
        return (
            <div>
                <NavbarContainer/>
                <div className={ContentStyle.container}>
                    <div className={ContentStyle.leftColumn}>
                        <div className={ContentStyle.languagesTitle}>
                            <p>My Courses</p>
                        </div>

                        <Courses/>
                    </div>

                    <div style={{flex: '3', marginLeft: '25px'}}>
                        <ContentCourses/>

                        <div className={ContentStyle.centerColumn}>

                            <div>
                                <Achievements/>
                            </div>

                            <div>
                                <AboutInfo/>
                            </div>
                        </div>
                    </div>
                    <div className={ContentStyle.rightColumn}>
                        <div>
                            <p style={{textAlign: 'left', fontWeight: '600'}}>Popular users</p>
                        </div>
                        <UsersContainer/>
                    </div>
                </div>
            </div>
        );
    }
}