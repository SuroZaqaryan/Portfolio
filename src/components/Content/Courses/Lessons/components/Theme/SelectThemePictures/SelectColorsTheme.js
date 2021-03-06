import React, {useState} from "react";
import SideBarColors from "../SideBarColors/SideBarColors"
import "./css/SelectThemePictures.css"
import SelectThemeContent from "./ThemeComponents/SelectThemeContent";
import classNames from "classnames/bind";

export default function SelectColorsTheme(props) {
    const groupSize = 3;

    const [selectedIndex, setSelectedIndex] = useState(false);

    const setBorder = (index) => {
        setSelectedIndex(index);
    };

    const rows = SideBarColors.map(function (col, index) {
        
        const selectBorder = classNames({
            'builtin_theme_preview': true,
            'selectBorder': index === selectedIndex ? 'selectBorder' : null
        });

        return <SelectThemeContent {...props} selectBorder={selectBorder} col={col} setBorder={setBorder} key={index}/>
    }).reduce(function (r, element, index) {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function (rowContent, index) {
        return <div key={index} className="SelectThemePictures_Separator">{rowContent}</div>;
    });
    return <div className="container">{rows}</div>;
};