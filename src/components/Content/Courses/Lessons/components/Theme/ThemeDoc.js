import React, {useState, useEffect, createContext} from "react";
import SideBar from "../SideBar/SideBar";
import PageContent from "../PageContent/PageContent";
import {RadioButton} from "@progress/kendo-react-inputs";
import "../../css/Sidebar.css"

export const CounterContext = createContext([]);

export default function ThemeDoc(props) {

    const [SideBarTheme, SetSideBarTheme] = useState(localStorage.getItem("SideBarKey"));
    const [PageContentTheme, SetPageContentTheme] = useState(localStorage.getItem("PageContentKey"));
    const [TextColor, SetTextColor] = useState(localStorage.getItem("TextColorKey"));

    const [themes, setThemes] = useState([
        {
            SideBar: "linear-gradient(180deg, rgba(66, 116, 131, 1) 0%, rgba(69, 75, 88, 1) 100%)",
            PageContent: "linear-gradient(180deg,rgba(65,116,130,1) 0%, #353a4f 80%)",
            TextColor: "#9ab3bd",
            RadioButtonBackground: "#10d6c3",
        },
        {
            SideBar: "linear-gradient(180deg, rgb(96 110 150) 0%, rgb(69 75 88) 100%)",
            PageContent: "linear-gradient(180deg, rgb(94 110 149) 0%, rgb(53 58 80) 80%)",
            TextColor: "#dfdfdfb3",
            RadioButtonBackground: "#b2c7fd",
        },
        {
            SideBar: "linear-gradient(180deg, rgb(146 93 116) 0%, rgb(71 75 88) 100%)",
            PageContent: "linear-gradient(180deg, rgb(147 99 123) 0%, rgb(55 58 80) 80%)",
            TextColor: "#dfdfdfb3",
            RadioButtonBackground: "#f0879e",
        },
    ])

    useEffect(() => {
        localStorage.setItem("SideBarKey", SideBarTheme, "PageContentKey", PageContentTheme);
        localStorage.setItem("TextColorKey", TextColor);
    })

    const SideBarPageContent = (PageContent, SideBar, TextColor) => {
        localStorage.setItem('PageContentKey', PageContent, 'SideBarKey', SideBar, 'TextColorKey', TextColor);
        SetPageContentTheme(PageContent);
        SetSideBarTheme(SideBar);
        SetTextColor(TextColor);
    }

    const list = themes.map((theme, index) => {
        return (
            <RadioButton
                key={index}
                style={{background: theme.RadioButtonBackground}}
                className={"RadioButton_ThemeDoc"}
                name="group1"
                value="first"
                onChange={() => SideBarPageContent(theme.PageContent, theme.SideBar, theme.TextColor)}
            />
        );
    })

    return (
        <CounterContext.Provider value={{
            SideBarValue: [SideBarTheme, SetSideBarTheme],
            PageContentValue: [PageContentTheme, SetPageContentTheme],
            TextColorValue: [TextColor, SetTextColor],
        }}>
            <SideBar list={list} {...props} />
            <PageContent {...props} />
        </CounterContext.Provider>
    );
}