import React from "react";
import ContentStyle from "./Content.module.css";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import {Courses} from "./Courses/ProgressCourses/Courses";
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

                        <div>
                            <Courses/>
                        </div>
                    </div>

                    <div style={{flex: '3', marginLeft: '25px'}}>
                        <ContentCourses/>
                    </div>
                    <div className={ContentStyle.rightColumn}>
                        <UsersContainer/>
                    </div>
                </div>
            </div>
        );
    }
}