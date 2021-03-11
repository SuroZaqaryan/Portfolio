import React, { useState } from "react";
import "./css/SelectThemePictures.css"
import GradientThemes from "../GradientContent/GradientThemesList";
import SelectThemeContent from "./ThemeComponents/SelectThemeContent";

export default function SelectGradientTheme(props) {
    const groupSize = 3;

    const [selectedIndex, setSelectedIndex] = useState(false);

    const setBorder = (index) => {
        setSelectedIndex(index);
    };

    const rows = GradientThemes.map(function (col, index) {
        return <SelectThemeContent {...props} col={col} key={index} selectedIndex={selectedIndex} index={index} setBorder={setBorder}/>
    }).reduce(function (r, element, index) {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function (rowContent, index) {
        return <div key={index} className="SelectThemePictures_Separator">{rowContent}</div>;
    });
    return <div className="container">{rows}</div>;
};
