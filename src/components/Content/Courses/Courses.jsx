import React, { Fragment } from 'react';
import ContentStyle from "./Courses.module.css";

import HTML from "./LanguagesIcons/html.png"
import CSS from "./LanguagesIcons/css-3.png"
import JS from "./LanguagesIcons/javascript.png"
import REACT from "./LanguagesIcons/react.png"
import NODE from "./LanguagesIcons/nodejs.png"
import ProgressBar from '@ramonak/react-progress-bar';

export const Courses = (props) => {
    return (
        <Fragment>
            <div className={ContentStyle.languagesBlock}>
                <div className={ContentStyle.programLanguages}>
                    <img src={HTML} alt="" />
                </div>
                <div className={ContentStyle.languageName}>
                    <div style={{ marginBottom: '10px' }}>
                        <p>HTML</p>
                    </div> 
                    <div>
                        <ProgressBar completed={60} bgcolor="#f6c54f"
                            height={14} labelSize="12px" borderRadius="2px" />
                    </div>
                </div>
            </div>

            <div className={ContentStyle.languagesBlock}>
                <div className={ContentStyle.programLanguages}>
                    <img src={CSS} alt="" />
                </div>
                <div className={ContentStyle.languageName}>
                    <div style={{ marginBottom: '10px' }}>
                        <p>CSS</p>
                    </div>
                    <div>
                        <ProgressBar completed={45} bgcolor="#ABFD7E"
                            height={14} labelSize="12px" borderRadius="2px" />
                    </div>
                </div>
            </div>

            <div className={ContentStyle.languagesBlock}>
                <div className={ContentStyle.programLanguages}>
                    <img src={JS} alt="" />
                </div>
                <div className={ContentStyle.languageName}>
                    <div style={{ marginBottom: '10px' }}>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <ProgressBar completed={75} bgcolor="#FD7E7E"
                            height={14} labelSize="12px" borderRadius="2px" />
                    </div>
                </div>
            </div>

            <div className={ContentStyle.languagesBlock}>
                <div className={ContentStyle.programLanguages}>
                    <img src={REACT} alt="React" />
                </div>
                <div className={ContentStyle.languageName}>
                    <div style={{ marginBottom: '10px' }}>
                        <p>React</p>
                    </div>
                    <div>
                        <ProgressBar completed={35} bgcolor="#83CAFF"
                            height={14} labelSize="12px" borderRadius="2px" />
                    </div>
                </div>
            </div>

            <div className={ContentStyle.languagesBlock}>
                <div className={ContentStyle.programLanguages}>
                    <img src={NODE} alt="React" />
                </div>
                <div className={ContentStyle.languageName}>
                    <div style={{ marginBottom: '10px' }}>
                        <p>Node</p>
                    </div>
                    <div>
                        <ProgressBar completed={40} bgcolor="#4EB328"
                            height={14} labelSize="12px" borderRadius="2px" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}