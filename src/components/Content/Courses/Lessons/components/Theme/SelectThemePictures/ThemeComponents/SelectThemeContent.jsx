import React from "react";
import Hashtag from "../css/hashtag.png";
import '../css/SelectThemePictures.css'
import {RadioButton} from "@progress/kendo-react-inputs";

export default function SelectThemeContent(props) {
    const selectBorder = props.selectBorder;
    const col = props.col;
    const setBorder = props.setBorder;
    const index = props.index;
    return(
        <div className={selectBorder} key={index} onClick={() => props.SideBarPageContent(col) || setBorder(index)}>
            <div style={{ background: col && col.PreviewThemeSideBar }}
                 className="builtin_theme_preview__nav">
                <div className="builtin_theme_preview__search" />
            </div>

            <div style={{ background: col && col.SideBar }} className="builtin_theme_preview__sidebar">
                <div className="builtin_theme_preview__sidebar__row">
                    <div style={{ background: col && col.PreviewThemeSideBar }} className="builtin_theme_preview__sidebar_line"/>
                    <div className="builtin_theme_preview__compose"/>
                </div>
                <div>
                    <div className="builtin_theme_preview__sidebar__other_row">
                        <div className="hashtag_icon">
                            <img src={Hashtag} width="10" height="10" alt={"Hashtag"}/>
                        </div>

                        <div className="builtin_theme_preview__sidebar_other_line"/>
                    </div>

                    <div className="builtin_theme_preview__sidebar__other_row builting_m_top">
                        <div className="hashtag_icon">
                            <img src={Hashtag} width="10" height="10" alt={"Hashtag"} />
                        </div>

                        <div className="builtin_theme_preview__sidebar_other_line"/>
                    </div>

                    <div className="builtin_theme_preview__sidebar__other_row">
                        <div className="builtin_theme_preview__compose_small"/>
                        <div className="builtin_theme_preview__sidebar_other_line"/>
                        <div className="builtin_theme_preview__compose_small_line"/>
                    </div>
                </div>
            </div>
            <div className="prefs_modal__radio__content">
                <div>
                    <RadioButton
                        style={{ background: col && col.RadioButtonBackground, border: col && col.RadioButtonBorderColor }}
                        className={"RadioButton_ThemeDoc"}
                        name="group1"
                        value="first"
                        onChange={() => props.SideBarPageContent(col)}
                    />
                </div>
                <div className="prefs_radio_child_content">
                    <label className="prefs_radio_text" htmlFor="other">{col && col.RadioTitle}</label>
                </div>
            </div>
        </div>
    );
}