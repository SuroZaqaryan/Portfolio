import React, {useState, useEffect, createContext} from "react";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import {RadioButton} from "@progress/kendo-react-inputs";
import Bg from "../../components/SideBar/Background/mac.jpg"
import Pink from "../../components/SideBar/Background/pink.jpg"
import Anapa from "../../components/SideBar/Background/anapa.jpg"
import "../../css/Sidebar.css"

export const CounterContext = createContext([]);

export default function ThemeDoc(props) {

    const [SideBarTheme, SetSideBarTheme] = useState(localStorage.getItem("SideBarKey"));
    const [PageContentTheme, SetPageContentTheme] = useState(localStorage.getItem("PageContentKey"));
    const [TextColor, SetTextColor] = useState(localStorage.getItem("TextColorKey"));
    const [SideBarBackground, SetSideBarBackground] = useState(localStorage.getItem("BgKey"));
    const [SideBarColorTheme, SetSideBarColor] = useState(localStorage.getItem("SideBarColorKey"));

    // SideBar Wallpapers
    const [SideBarBackgrounds,] = useState([
        {
            SideBarWallpaper: Bg,
        },
        {
            SideBarWallpaper: Pink,
        },
        {
            SideBarWallpaper: Anapa,
        },
    ])

    // Gradient Themes
    const [GradientThemes,] = useState([
        {
            SideBar: "linear-gradient(180deg, rgba(66, 116, 131, 1) 0%, rgba(69, 75, 88, 1) 100%)",
            PageContent: "linear-gradient(180deg,rgba(65,116,130,1) 0%, #353a4f 80%)",
            TextColor: "#9ab3bd",
            RadioButtonBackground: "#10d6c3",
            RadioButtonBorderColor: "1px solid #34a096",
        },
        {
            SideBar: "linear-gradient(180deg, rgb(96 110 150) 0%, rgb(69 75 88) 100%)",
            PageContent: "linear-gradient(180deg, rgb(94 110 149) 0%, rgb(53 58 80) 80%)",
            TextColor: "#dfdfdfb3",
            RadioButtonBackground: "#b2c7fd",
            RadioButtonBorderColor: "1px solid #99b6ff",
        },
        {
            SideBar: "linear-gradient(180deg, rgb(146 93 116) 0%, rgb(71 75 88) 100%)",
            PageContent: "linear-gradient(180deg, rgb(147 99 123) 0%, rgb(55 58 80) 80%)",
            TextColor: "#dfdfdfb3",
            RadioButtonBackground: "#f0879e",
            RadioButtonBorderColor: "1px solid #b05757",
        },
    ])

    // Gradient Themes
    const [SideBarColor,] = useState([
        {
            SideBarColor: "red",
            SideBarColorRadioButtonBackground: "#f0879e",
            SideBarColorRadioButtonBorder: "1px solid #b05757",
        },
        {
            SideBarColor: "yellow",
            SideBarColorRadioButtonBackground: "#f0879e",
            SideBarColorRadioButtonBorder: "1px solid #b05757",
        },
        {
            SideBarColor: "green",
            SideBarColorRadioButtonBackground: "#f0879e",
            SideBarColorRadioButtonBorder: "1px solid #b05757",
        },
    ])

    useEffect(() => {
        localStorage.setItem("SideBarKey", SideBarTheme, "PageContentKey", PageContentTheme);
        localStorage.setItem("TextColorKey", TextColor);
        localStorage.setItem("BgKey", SideBarBackground);
        localStorage.setItem("SideBarColorKey", SideBarColorTheme);
    })

    const ChangeSideBarWallpaper = (SideBarWallpaper) => {
        localStorage.setItem('BgKey', SideBarWallpaper);
        SetSideBarTheme(localStorage.removeItem("SideBarKey"));
        SetSideBarBackground(SideBarWallpaper);
    }

    const SideBarPageContent = (PageContent, SideBar, TextColor) => {
        localStorage.setItem('PageContentKey', PageContent, 'SideBarKey', SideBar, 'TextColorKey', TextColor);
        SetPageContentTheme(PageContent);
        SetSideBarTheme(SideBar);
        SetTextColor(TextColor);
    }

    const SideBarColorChange = (SideBarColor) => {
        localStorage.setItem('SideBarColorKey', SideBarColor,);
        SetSideBarColor(SideBarColor);
    }

    const sideBarColor = SideBarColor.map((sidebarColor, index) => {
        return (
            <RadioButton
                key={index}
                style={{background: sidebarColor.SideBarColorRadioButtonBackground, border: sidebarColor.SideBarColorRadioButtonBorder}}
                className={"RadioButton_ThemeDoc"}
                name="group1"
                value="first"
                onChange={() => SideBarColorChange(sidebarColor.SideBarColor)}
            />
        );
    })

    const gradientList = GradientThemes.map((gradTheme, index) => {
        return (
            <RadioButton
                key={index}
                style={{background: gradTheme.RadioButtonBackground, border: gradTheme.RadioButtonBorderColor}}
                className={"RadioButton_ThemeDoc"}
                name="group1"
                value="first"
                onChange={() => SideBarPageContent(gradTheme.PageContent, gradTheme.SideBar, gradTheme.TextColor)}
            />
        );
    })

    const SideBarWallpaperList = SideBarBackgrounds.map((theme, index) => {
        return (
            <img key={index} width={"52"} height={"42"} src={theme.SideBarWallpaper} className={"SideBar_Appearance_Select_Icon"}
                 onClick={() => ChangeSideBarWallpaper(theme.SideBarWallpaper)} alt={"Select Theme"} />
        );
    })

    return (
        <div className="page-wrapper chiller-theme toggled">
            <CounterContext.Provider value={{
                SideBarValue: [SideBarTheme, SetSideBarTheme],
                PageContentValue: [PageContentTheme, SetPageContentTheme],
                TextColorValue: [TextColor, SetTextColor],
                SideBarWallpaperValue: [SideBarBackground, SetSideBarBackground],
                SideBarColor: [SideBarColorTheme, SetSideBarColor],
            }}>
                <SideBar gradientList={gradientList} SideBarWallpaperList={SideBarWallpaperList} sideBarColor={sideBarColor} {...props} />
                <PageContent {...props} />
            </CounterContext.Provider>
        </div>
    );
}
