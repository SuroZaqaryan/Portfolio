import React from "react";
import {CounterContext} from "../../../Theme/ThemeDoc";
import {NavLink} from "react-router-dom";
import BackIcon from "../../icons/SideBarIcons/icons8-back.png"

export function SideBarBack(props) {

    const {SideBarValue, PageContentValue, TextColorValue, SideBarWallpaperValue} = React.useContext(CounterContext);

    const [, SetSideBarTheme] = SideBarValue;
    const [, SetPageContentTheme] = PageContentValue;
    const [, SetTextColor] = TextColorValue;
    const [, SetSideBarBackground] = SideBarWallpaperValue;

    const AssignDefaultTheme = (SideBarKey, PageContentKey) => {
        SetSideBarTheme(localStorage.removeItem(SideBarKey));
        SetPageContentTheme(localStorage.removeItem(PageContentKey));
        SetTextColor(localStorage.removeItem(TextColorValue));
        SetSideBarBackground(localStorage.removeItem(SideBarWallpaperValue));
    }

    return(
        <div className={"SideBar_Back_Theme_Container"}>
            <NavLink className={"Back_To_Content"} to={"/content"}>
                    <div className={"sidebar_backIcon_container"}>
                        <img src={BackIcon} alt=""/>
                    </div>

                    <div>
                        <p>Back</p>
                    </div>
            </NavLink>

            <div onClick={() => AssignDefaultTheme("SideBarKey", "PageContentKey")}
                 className={"SideBar_Theme_Default"}>
                <p>Theme Default</p>
            </div>
        </div>
    );
}