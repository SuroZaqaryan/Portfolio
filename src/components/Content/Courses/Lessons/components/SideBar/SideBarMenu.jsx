import React, { useEffect, useState } from 'react';
import SidebarItems from "../../pages/SidebarItems.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hashtag from './icons/SideBarIcons/icons8-hashtag-22.png'

export default function SideBarMenu(props) {

    const { SideBarTheme, SideBarWallpaperTheme } = props;

    const [SideBarThemesColors, setSideBarThemesColors] = useState();

    useEffect(() => {
        if (SideBarTheme && SideBarTheme.ItemColor) {
            setSideBarThemesColors(SideBarTheme.ItemColor)
        } else if (SideBarWallpaperTheme) {
            setSideBarThemesColors(SideBarWallpaperTheme.color)
        } else {
            setSideBarThemesColors("#383838")
        }
    }, [SideBarTheme && SideBarTheme.ItemColor,SideBarWallpaperTheme && SideBarWallpaperTheme]);

    const renderIcons = () => {
        if(SideBarTheme && SideBarTheme.IconTitle) {
            return(
                <FontAwesomeIcon
                    style={{
                        color: SideBarTheme.IconTitleColor && SideBarTheme.IconTitleColor ? SideBarTheme.IconTitleColor : '#ffffff75',
                        marginRight: '10px',
                    }}
                    icon={SideBarTheme.IconTitle}
                />
            );
        } else if(SideBarWallpaperTheme && SideBarWallpaperTheme.WallpaperIcon) {
            return  <FontAwesomeIcon
                style={{color: SideBarWallpaperTheme.WallpaperIconColor && SideBarWallpaperTheme.WallpaperIconColor ? SideBarWallpaperTheme.WallpaperIconColor : '#ffffff', marginRight: "10px"}}
                icon={SideBarWallpaperTheme.WallpaperIcon}
            />
        } else {
            return <img style={{ width: "22px", marginRight: "7px" }} src={Hashtag} alt="Hashtag" />
        }
    }

    return (
        <ul>
            {SidebarItems.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item.CourseTopic && (
                            <li style={{ background: SideBarWallpaperTheme && SideBarWallpaperTheme.TitleColor }} className="header-menu">
                                {renderIcons()}
                                <span style={{
                                    color: SideBarThemesColors ? SideBarThemesColors : '#1c1c1c',
                                    fontWeight: SideBarTheme && SideBarTheme.FontWeight
                                }}>{item.CourseTopic}</span>
                            </li>
                        )}

                        {item.name && (
                            <li style={{
                                borderBottom: SideBarTheme && SideBarTheme.Border,
                            }} className="courseLessonList">
                                {
                                    SideBarTheme && SideBarTheme.Icon ?
                                        <FontAwesomeIcon
                                            style={{ color: SideBarTheme && SideBarTheme.IconColor, fontSize: "12px" }}
                                            icon={SideBarTheme.Icon}
                                        />
                                        :
                                        null 
                                }

                                <Link style={{ color: SideBarThemesColors ? SideBarThemesColors : '#1c1c1c'}} className={"course_Lesson_List_Link"}
                                    to={`${props.path}` + item.route}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}
