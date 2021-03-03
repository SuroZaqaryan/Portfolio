import React from 'react';
import SidebarItems from "../../pages/SidebarItems.js";
import {Link} from "react-router-dom";
import {CounterContext} from "../Theme/ThemeDoc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Hashtag from './icons/SideBarIcons/icons8-hashtag-22.png'

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
                                        <FontAwesomeIcon
                                            style={{
                                                color: SideBarStyle.IconTitleColor && SideBarStyle.IconTitleColor ? SideBarStyle.IconTitleColor : '#ffffff75',
                                                marginRight: '10px',
                                            }}
                                            icon={SideBarStyle.IconTitle}
                                        />
                                        :
                                        <img style={{width: "22px", marginRight: "7px"}} src={Hashtag} alt="Hashtag"/>
                                }
                                <span style={{
                                    color: SideBarTheme && SideBarStyle.TitleColor,
                                    fontWeight: SideBarTheme && SideBarStyle.FontWeight
                                }}>{item.CourseTopic}</span>
                            </li>
                        )}

                        {item.name && (
                            <li style={{
                                borderBottom: SideBarTheme && SideBarStyle.Border,
                            }} className="courseLessonList">
                                {
                                    SideBarTheme && SideBarStyle.Icon ?
                                        <FontAwesomeIcon
                                            style={{color: SideBarTheme && SideBarStyle.IconColor, fontSize: "12px"}}
                                            icon={SideBarStyle.Icon}
                                        />
                                        :
                                        null
                                }
                                <Link className="course_Lesson_List_Link"
                                      style={{
                                          color: SideBarTheme && SideBarStyle.ItemColor,
                                          fontWeight: SideBarTheme && SideBarStyle.ItemFontWeight,
                                      }}
                                      to={`${props.path}` + item.route}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}
