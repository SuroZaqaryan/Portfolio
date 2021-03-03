import React, { useState } from "react";
import { RadioButton } from "@progress/kendo-react-inputs"
import Hashtag from "./hashtag.png"
import "./SelectThemePictures.css"
import GradientThemes from "../GradientContent/GradientThemesList";
import classNames from 'classnames/bind';
export default function SelectGradientTheme(props) {
    const resultsRender = [];
    const [selectedIndex, setSelectedIndex] = useState(false);

    const setBorder = (index) => {
        setSelectedIndex(index);
    };

    for (var i = 0; i < GradientThemes.length; i += 3) {
        resultsRender.push(
            <div className={"SelectThemePictures_Separator"}>
                {
                    GradientThemes.slice(i, i + 3).map((col, index) => {

                        var selectBorder = classNames({
                            'builtin_theme_preview': true,
                            'selectBorder': index === selectedIndex ? 'selectBorder' : null
                        });

                        return (
                            <div key={index} className={selectBorder} onClick={() => props.SideBarPageContent(col) || setBorder(index)}>
                                <div className={"builtin_theme_preview_hover"}>
                                <div style={{ background: col.PreviewThemeSideBar }} className="builtin_theme_preview__nav">
                                    <div className="builtin_theme_preview__search">

                                    </div>
                                </div>

                                <div style={{ background: col.SideBar }} className="builtin_theme_preview__sidebar">
                                    <div className="builtin_theme_preview__sidebar__row">
                                        <div style={{ background: col.PreviewThemeSideBar }} className="builtin_theme_preview__sidebar_line">

                                        </div>

                                        <div className="builtin_theme_preview__compose">

                                        </div>
                                    </div>

                                    <div>
                                        <div className="builtin_theme_preview__sidebar__other_row">
                                            <div className="hashtag_icon">
                                                <img src={Hashtag} width="10" height="10" />
                                            </div>

                                            <div className="builtin_theme_preview__sidebar_other_line">

                                            </div>
                                        </div>

                                        <div className="builtin_theme_preview__sidebar__other_row builting_m_top">
                                            <div className="hashtag_icon">
                                                <img src={Hashtag} width="10" height="10" />
                                            </div>

                                            <div className="builtin_theme_preview__sidebar_other_line">

                                            </div>
                                        </div>

                                        <div className="builtin_theme_preview__sidebar__other_row">
                                            <div className="builtin_theme_preview__compose_small">

                                            </div>

                                            <div className="builtin_theme_preview__sidebar_other_line">

                                            </div>

                                            <div className="builtin_theme_preview__compose_small_line">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prefs_modal__radio__content">
                                    <div>
                                        <RadioButton
                                            style={{ background: col.RadioButtonBackground, border: col.RadioButtonBorderColor }}
                                            className={"RadioButton_ThemeDoc"}
                                            name="group1"
                                            value="first"
                                            onChange={() => props.SideBarPageContent(col)}
                                        />
                                    </div>
                                    <div className="prefs_radio_child_content">
                                        <label className="prefs_radio_text" htmlFor="other">{col.RadioTitle}</label>
                                    </div>
                                </div>
                            </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }


    return (
        <div className="SelectThemeWrapper">
            {resultsRender}
        </div>
    );
};
