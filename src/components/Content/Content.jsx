import React from "react";
import ContentStyle from "./Content.module.css";
import NavbarContainer from "../Navbar/NavbarContainer";
import UsersContainer from "../Users/UsersContainer";
import {Courses} from "./Courses/ProgressCourses/Courses";
import ContentCourses_Container from "./Courses/ContentCourses/ContentCourses_Container";
import styled from "styled-components";

function Content(props) {

    const RightColumn = styled.div`
      background: ${props => (props.value ? "#212631" : "#ffffff")};
      flex: 1 1 2%;
      border-radius: 25px;
    `;

    return (
        <div>
            <NavbarContainer value={props.value}/>
            <div className={ContentStyle.container}>
                <div className={props.value ? ContentStyle.leftDarkColumn : ContentStyle.leftColumn}>
                    <div className={props.value ? ContentStyle.languagesDarkTitle : ContentStyle.languagesTitle}>
                        <p>My Courses</p>
                    </div>

                    <div>
                        <Courses/>
                    </div>
                </div>

                <div style={{flex: '3 1 12%'}}>
                    <ContentCourses_Container value={props.value}/>
                </div>
                <RightColumn value={props.value}>
                    <UsersContainer value={props.value}/>
                </RightColumn>
            </div>
        </div>
    );
}

export default Content;