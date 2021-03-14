import React, {useEffect, useState} from "react";
import "../../../css/Sidebar.css"
import {SideBarBack} from "./Back/Back";
import {SideBarUser} from "./SideBar_User/SideBarUser";
import {SideBarThemes} from "./SideBar_Themes/SideBar_Themes";
import SideBarUserContainer from "./SideBar_User/SideBarUserContainer";

export default function SideBarWrapper(props) {

    const {SideBarTheme, SideBarWallpaperTheme} = props;

    window.$sideBarDefaultColor = "#ffffff"

    const SideBarThemeValue = SideBarTheme && SideBarTheme;
    const SideBarWallpaperThemeValue = SideBarWallpaperTheme && SideBarWallpaperTheme;

    const [SideBarThemesColors, setSideBarThemesColors] = useState();

    useEffect(() => {
        if (SideBarThemeValue && SideBarThemeValue.UserNameColor) {
            setSideBarThemesColors(SideBarThemeValue.UserNameColor)
        } else if (SideBarWallpaperThemeValue) {
            setSideBarThemesColors(SideBarWallpaperThemeValue.color)
        }
    }, [SideBarThemeValue && SideBarThemeValue.UserNameColor,SideBarWallpaperThemeValue && SideBarWallpaperThemeValue.color]);

    return(
        <div>
            <div className="sidebar-brand">
                <SideBarBack {...props} />
                <SideBarUserContainer {...props} SideBarThemesColors={SideBarThemesColors}/>
                <SideBarThemes {...props} SideBarThemesColors={SideBarThemesColors}/>
            </div>
        </div>
    );
}