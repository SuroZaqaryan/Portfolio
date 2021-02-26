import React, { useContext, useState, useEffect } from "react";
import { CounterContext } from "../../../Theme/ThemeDoc";
import { NavLink } from "react-router-dom";
import BackIcon from "../../icons/SideBarIcons/icons8-back.png"
import BackButton from "./BackButton";
import { SideBarContext } from "../../SideBarContext";

export function SideBarBack() {

    const { SideBarValue, SideBarWallpaperValue } = React.useContext(CounterContext);

    const [SideBarTheme, SetSideBarTheme] = SideBarValue;
    const [, SetSideBarBackground] = SideBarWallpaperValue;

    const {someValue}  = useContext(SideBarContext);
    const [BlurItem, setBlurItem] = useState(someValue);

    const ItemColor = SideBarTheme && SideBarTheme.ItemColor;
    const AssignDefaultTheme = () => {
        // setBlurItem(BlurItem[0] = 7)
        localStorage.removeItem("SideBarKey", SideBarTheme)
        SetSideBarTheme("SideBarKey")
        SetSideBarBackground(localStorage.removeItem(SideBarWallpaperValue));
    }

    return (
        <div className={"SideBar_Back_Theme_Container"}>
            {
                ItemColor ?
                    <BackButton />
                    :
                    <NavLink className={"Back_To_Content"} to={"/content"}>
                        <div className={"sidebar_backIcon_container"}>
                            <img src={BackIcon} alt="" />
                        </div>

                        <div>
                            <p style={{ marginTop: '1px' }}>Back</p>
                        </div>
                    </NavLink>
            }

            <div onClick={() => AssignDefaultTheme()} className={"SideBar_Theme_Default"}>
                <p style={{ color: ItemColor, fontWeight: ItemColor ? '400' : '500' }}>Theme Default</p>
            </div>
        </div>
    );
}