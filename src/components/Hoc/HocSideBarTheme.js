import React from "react";
import {CounterContext} from "../Content/Courses/Lessons/components/Theme/ThemeDoc";

export const HocSideBarTheme = (HocSideBarThemeComponent) => {
    return function HocSideBarValues() {
        const {SideBarValue} = React.useContext(CounterContext);
        const [SideBarTheme,] = SideBarValue;

        return <HocSideBarThemeComponent SideBarTheme={SideBarTheme} />
    }
}