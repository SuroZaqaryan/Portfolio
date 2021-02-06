import React from 'react';
import SidebarItems from "../../pages/SidebarItems.js";
import {Link} from "react-router-dom";
import {CounterContext} from "../Theme/ThemeDoc";
import styled from "styled-components";
import "./styles/Style.css"
import Hashtag from './icons/SideBarIcons/icons8-hashtag-22.png'

const CourseTopic = styled.span`
  color: #582f35;
`;

export default function SideBarMenu(props) {

    const {TextColorValue} = React.useContext(CounterContext);
    const [TextColor,] = TextColorValue;

    return (
        <ul>
            {SidebarItems.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item.CourseTopic && (
                            <li className="header-menu">
                                <img style={{width: "22px", marginRight: "5px"}} src={Hashtag} alt=""/>
                                <CourseTopic style={{color: TextColor}}>{item.CourseTopic}</CourseTopic>
                            </li>
                        )}

                        {item.name && (
                            <li className="courseLessonList">
                                <Link to={`${props.path}` + item.route}
                                      className="course_Lesson_List_Link">{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}
