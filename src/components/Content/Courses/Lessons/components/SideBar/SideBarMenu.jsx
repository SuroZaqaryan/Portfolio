import React from 'react';
import SidebarItems from "../../pages/SidebarItems.js";
import {Link} from "react-router-dom";
import "./styles/Style.css"
import {CounterContext} from "../Theme/ThemeDoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Hashtag from './icons/SideBarIcons/icons8-hashtag-22.png'
import {SideBarTitleIcon} from "./SideBar_Components/SideBar_Modal/ThemeIcon";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";

export default function SideBarMenu(props) {

    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarTheme,] = SideBarValue;
    const SideBarStyle = SideBarTheme && SideBarTheme;

    return (
        <ul>
            {SidebarItems.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item.CourseTopic && (
                            <li className="header-menu">
                                    {
                                        SideBarTheme && SideBarTheme.IconTitle ?
                                            <SideBarTitleIcon />
                                            :
                                            <img style={{width: "22px", marginRight: "7px"}} src={Hashtag} alt="Hashtag"/>
                                    }
                                    <span style={{color: SideBarTheme && SideBarStyle.TitleColor, fontWeight: SideBarTheme && SideBarStyle.FontWeight}}>{item.CourseTopic}</span>
                            </li>
                        )}

                        {item.name && (
                            <li style={{marginLeft: SideBarTheme && SideBarStyle.MarginLeft}} className="courseLessonList">
                                <div style={{display: "flex", alignItems: "center"}}>
                                    {
                                        SideBarTheme && SideBarStyle.Icon ?
                                            <FontAwesomeIcon style={{color: SideBarTheme &&  SideBarStyle.IconColor, fontSize: "12px"}}
                                                             icon={faDotCircle}
                                            />
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                    <Link style={{color: SideBarTheme && SideBarStyle.ItemColor}}
                                          to={`${props.path}` + item.route}
                                          className="course_Lesson_List_Link">{item.name}</Link>
                                </div>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}
