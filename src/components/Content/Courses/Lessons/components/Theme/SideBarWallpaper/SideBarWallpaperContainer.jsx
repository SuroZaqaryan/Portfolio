import React from 'react';
import SideBarBackgrounds from "./SideBarWallpaper";

export default function SideBarWallpaperContainer(props) {

    const SideBarWallpaperList = SideBarBackgrounds.map((theme, index) => {
        return (
            <div key={index}
                 className={"SideBar_Appearance_Select_Icon"}
                 style={{background: theme.SideBarWallpaper}}
                 onClick={() => props.ChangeSideBarWallpaper(theme)} alt={"Select Theme"}/>
        );
    })
    return (
        <>
            {SideBarWallpaperList}
        </>
    );
}