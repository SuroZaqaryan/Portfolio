import React, {useState, useEffect, createContext} from "react";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import {RadioButton} from "@progress/kendo-react-inputs";
import "../../css/Sidebar.css"
import GradientThemes from "./GradientContent/GradientThemesList";
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

    const gradientList = GradientThemes.map((gradTheme, index) => {
        return (
                <RadioButton
                    key={index}
                    style={{background: gradTheme.RadioButtonBackground, border: gradTheme.RadioButtonBorderColor}}
                    className={"RadioButton_ThemeDoc"}
                    name="group1"
                    value="first"
                    onChange={() => SideBarPageContent(gradTheme)}
                />
        );
    })

    const SideBarWallpaperList = SideBarBackgrounds.map((theme, index) => {
        return (
            <img key={index} width={"52"} height={"42"} src={theme.SideBarWallpaper}
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
                <SideBar gradientList={gradientList} SideBarWallpaperList={SideBarWallpaperList} {...props} />
                <PageContent {...props} />
            </CounterContext.Provider>
        </div>
    );
}
