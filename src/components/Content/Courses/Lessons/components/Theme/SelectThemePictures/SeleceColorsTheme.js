import React from "react";
import { RadioButton } from "@progress/kendo-react-inputs"
import SideBarColors from "../SideBarColors/SideBarColors"
import Hashtag from "./hashtag.png"
import "./SelectThemePictures.css"

export default function SeleceColorsTheme(props) {
    const resultsRender = [];
    for (var i = 0; i < SideBarColors.length; i += 3) {
        resultsRender.push(
            <div className={"SelectThemePictures_Separator"}>
                {
                    SideBarColors.slice(i, i + 3).map((col, index) => {
                        return (
                            <div key={index} className="builtin_theme_preview" onClick={() => props.SideBarPageContent(col)}>
                                <div style={{ background: col.PreviewThemeSideBar }} className="builtin_theme_preview__nav">
                                    <div className="builtin_theme_preview__search">

                                    </div>
                                </div>

                                <div style={{ background: col.SideBar }} className="builtin_theme_preview__sidebar">
                                    <div className="builtin_theme_preview__sidebar__row">
                                        <div style={{ background: col.PreviewThemeSideBar }} className="builtin_theme_preview__sidebar_line">
                                        </div>
                                        <div className="builtin_theme_preview__compose"> </div>
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
