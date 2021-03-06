import React, {useState, useEffect, createContext} from "react";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import "../../css/Sidebar.css"

export const CounterContext = createContext([]);

export default function ThemeDoc(props) {

    const [SideBarTheme, SetSideBarTheme] = useState(JSON.parse(localStorage.getItem("SideBarKey")));
    const [SideBarBackground, SetSideBarBackground] = useState(JSON.parse(localStorage.getItem("BgKey")));

    useEffect(() => {
        localStorage.setItem('SideBarKey', JSON.stringify(SideBarTheme));
        localStorage.setItem("BgKey", JSON.stringify(SideBarBackground));
    })

    const ChangeSideBarWallpaper = (SideBarWallpaper) => {
        localStorage.removeItem("SideBarKey", SideBarTheme)
        SetSideBarTheme("SideBarKey")

        localStorage.setItem('BgKey', JSON.stringify(SideBarWallpaper));
        SetSideBarBackground(SideBarWallpaper);
    }

    const SideBarPageContent = (gradTheme) => {
        localStorage.setItem('SideBarKey', JSON.stringify(gradTheme));
        SetSideBarTheme(gradTheme);
    }

    return (
        <div className="page-wrapper chiller-theme toggled">
            <CounterContext.Provider value={{
                SideBarValue: [SideBarTheme, SetSideBarTheme],
                SideBarWallpaperValue: [SideBarBackground, SetSideBarBackground],
            }}>
                <SideBar ChangeSideBarWallpaper={ChangeSideBarWallpaper} SideBarPageContent={SideBarPageContent} {...props} />
                <PageContent {...props} />
            </CounterContext.Provider>
        </div>
    );
}

