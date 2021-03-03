import React, {useState, useEffect, createContext} from "react";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import "../../css/Sidebar.css"
import SideBarBackgrounds from "./SideBarWallpaper/SideBarWallpaper";

export const CounterContext = createContext([]);

export default function ThemeDoc(props) {

    const [SideBarTheme, SetSideBarTheme] = useState(JSON.parse(localStorage.getItem("SideBarKey")));
    const [SideBarBackground, SetSideBarBackground] = useState(localStorage.getItem("BgKey"));

    useEffect(() => {
        localStorage.setItem('SideBarKey', JSON.stringify(SideBarTheme));
        localStorage.setItem("BgKey", SideBarBackground);
    })

    const ChangeSideBarWallpaper = (SideBarWallpaper) => {
        localStorage.removeItem("SideBarKey", SideBarTheme)
        SetSideBarTheme("SideBarKey")

        localStorage.setItem('BgKey', SideBarWallpaper);
        SetSideBarBackground(SideBarWallpaper);
    }

    const SideBarPageContent = (gradTheme) => {
        localStorage.setItem('SideBarKey', JSON.stringify(gradTheme));
        SetSideBarTheme(gradTheme);
    }


    const SideBarWallpaperList = SideBarBackgrounds.map((theme, index) => {
        return (
            <img key={index} width={"70"} height={"55"} src={theme.SideBarWallpaper}
                 className={"SideBar_Appearance_Select_Icon"}
                 onClick={() => ChangeSideBarWallpaper(theme.SideBarWallpaper)} alt={"Select Theme"}/>
        );
    })

    return (
        <div className="page-wrapper chiller-theme toggled">
            <CounterContext.Provider value={{
                SideBarValue: [SideBarTheme, SetSideBarTheme],
                SideBarWallpaperValue: [SideBarBackground, SetSideBarBackground],
            }}>
                <SideBar SideBarWallpaperList={SideBarWallpaperList} SideBarPageContent={SideBarPageContent} {...props} />
                <PageContent {...props} />
            </CounterContext.Provider>
        </div>
    );
}

