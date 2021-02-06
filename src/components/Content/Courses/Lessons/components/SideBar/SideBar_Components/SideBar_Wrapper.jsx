import React from "react";
import "../../../css/Sidebar.css"
import {SideBarBack} from "./Back/Back";
import {SideBarUser} from "./SideBar_User/SideBarUser";
import {SideBarThemes} from "./SideBar_Themes/SideBar_Themes";
import {SideBarWallpaperTheme} from "./SideBarTheme_Wallpaper/SideBarWallpaperTheme";

export default function SideBarWrapper(props) {
    return(
        <div>
            <div className="sidebar-brand">
                <SideBarBack {...props} />
                <SideBarUser {...props} />
                <SideBarThemes {...props} />
                <SideBarWallpaperTheme {...props} />
            </div>
        </div>
    );
}