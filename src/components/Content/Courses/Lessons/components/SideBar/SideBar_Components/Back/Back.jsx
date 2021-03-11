import React, {useState, useEffect} from "react";
import { CounterContext } from "../../../Theme/ThemeDoc";
import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";
import { LeftOutlined } from "@ant-design/icons";

export function SideBarBack(props) {
    const {SideBarTheme, SideBarWallpaperTheme} = props;
    const { SideBarValue, SideBarWallpaperValue } = React.useContext(CounterContext);

    const SideBarThemeValue = SideBarTheme && SideBarTheme;
    const SideBarWallpaperThemeValue = SideBarWallpaperTheme && SideBarWallpaperTheme;

    const [SideBarThemes, SetSideBarTheme] = SideBarValue;
    const [SideBarBackground,SetSideBarBackground] = SideBarWallpaperValue;

    const ItemColor = SideBarThemes && SideBarThemes.ItemColor;

    const AssignDefaultTheme = () => {
        localStorage.removeItem("SideBarKey", SideBarThemes)
        SetSideBarTheme("SideBarKey")

        localStorage.removeItem("BgKey", SideBarBackground)
        SetSideBarBackground("BgKey");
    }


    const [SideBarThemesColors, setSideBarThemesColors] = useState();
    const [SideBarWallpaperBackButtonColor, setSideBarWallpaperBackButtonColor] = useState();

    useEffect(() => {
        if (SideBarThemeValue && SideBarThemeValue.UserNameColor) {
            setSideBarThemesColors(SideBarThemeValue.UserNameColor)
        } else if (SideBarWallpaperThemeValue && SideBarWallpaperThemeValue.color) {
            setSideBarThemesColors(SideBarWallpaperThemeValue.color)
            setSideBarWallpaperBackButtonColor(SideBarWallpaperThemeValue.color)
        } else {
            setSideBarWallpaperBackButtonColor("#1c1c1c")
        }
    }, [SideBarThemeValue && SideBarThemeValue.UserNameColor, SideBarWallpaperThemeValue && SideBarWallpaperThemeValue.color]);

    return (
        <div className={"SideBar_Back_Theme_Container"}>
            {
                ItemColor ?
                    <BackButton SideBarTheme={SideBarThemes}/>
                    :
                    <NavLink className={"Back_To_Content"} to={"/content"}>
                        <div className={"sidebar_backIcon_container"}>
                            <LeftOutlined style={{color: SideBarWallpaperBackButtonColor, fontSize: "12px"}} />
                        </div>

                        <div>
                            <p style={{color: SideBarThemesColors ? SideBarThemesColors : "#1c1c1c", marginTop: '1px', fontSize: "13px" }}>Back</p>
                        </div>
                    </NavLink>
            }

            <div onClick={() => AssignDefaultTheme()} className={"SideBar_Theme_Default"}>
                <p style={{ color: SideBarThemesColors ? SideBarThemesColors : "#1c1c1c", fontWeight: ItemColor ? '400' : '500' }}>Theme Default</p>
            </div>
        </div>
    );
}