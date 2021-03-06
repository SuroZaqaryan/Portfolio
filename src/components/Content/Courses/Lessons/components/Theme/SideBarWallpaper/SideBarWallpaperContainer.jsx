import React from 'react';
import SideBarBackgrounds from "./SideBarWallpaper";

export default function SideBarWallpaperContainer(props) {

    const SideBarWallpaperList = SideBarBackgrounds.map((theme, index) => {
        return (
            <img key={index} width={"70"} height={"55"}
                 src={theme.SideBarWallpaper}
                 className={"SideBar_Appearance_Select_Icon"}
                 onClick={() => props.ChangeSideBarWallpaper(theme)} alt={"Select Theme"}/>
        );
    })
    return (
        <>
            {SideBarWallpaperList}
        </>
    );
}