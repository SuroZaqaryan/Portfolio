import React, { Fragment } from 'react';
import ContentStyle from "./Courses.module.css";
import HTML from "./LanguagesIcons/html.png"
import CSS from "./LanguagesIcons/css-3.png"
import JavaScript from "./LanguagesIcons/javascript.png"
import ReactImage from "./LanguagesIcons/react.png"
import Node from "./LanguagesIcons/nodejs.png"

import ProgressBar from '@ramonak/react-progress-bar';

export class Courses extends React.Component {
    constructor() {
        super();
        this.state = {
            CoursesPage: [
                {
                    languageName: "HTML",
                    img: HTML,

                    progress: {
                        completed: 60,
                        bgcolor: "#f6c54f"
                    }
                },
                {
                    languageName: "CSS",
                    img: CSS,

                    progress: {
                        completed: 45,
                        bgcolor: "#ABFD7E"
                    }
                },
                {
                    languageName: "JavaScript",
                    img: JavaScript,

                    progress: {
                        completed: 75,
                        bgcolor: "#FD7E7E"
                    }
                },
                {
                    languageName: "React",
                    img: ReactImage,

                    progress: {
                        completed: 35,
                        bgcolor: "#83CAFF"
                    }
                },
                {
                    languageName: "Node",
                    img: Node,

                    progress: {
                        completed: 40,
                        bgcolor: "#4EB328"
                    }
                },
            ]
        }
    }
    render() {
        const list = this.state.CoursesPage.map((item, index) => {
            return (
                <div className={ContentStyle.languagesBlock} key={index}>
                    <div className={ContentStyle.programLanguages}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={ContentStyle.languageName}>
                        <div style={{ marginBottom: '10px' }}>
                            <p>{item.languageName}</p>
                        </div>
                        <div>
                            <ProgressBar completed={item.progress.completed} bgcolor={item.progress.bgcolor}
                                height={14} labelSize="12px" borderRadius="2px" />
                        </div>
                    </div>
                </div>
            );
        }

        )
        return (
            <Fragment>
                <div>
                    {list}
                </div>
            </Fragment>
        );
    }
}