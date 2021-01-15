import React, { Fragment } from 'react';
import ContentStyle from "./Courses.module.css";
import HTML from "./LanguagesIcons/html.png"
import CSS from "./LanguagesIcons/css-3.png"
import JavaScript from "./LanguagesIcons/javascript.png"
import ReactImage from "./LanguagesIcons/react.png"
import Node from "./LanguagesIcons/nodejs.png"
import swift from "./LanguagesIcons/swift.png"
import styled from "styled-components";
import ProgressBar from '@ramonak/react-progress-bar';

const UserContainer = styled.div`
  border-bottom: ${props => (props.value ? "1px solid #e3e3e30d" : "1px solid #e3e3e30d")};
  display: flex;
  justify-content: flex-start;
  margin-right: 20px;
  margin-bottom: 40px;
  padding-bottom: 35px;
`;

export class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CoursesPage: [
                {
                    languageName: "HTML",
                    img: HTML,

                    progress: {
                        completed: 60,
                        bgcolor: "#ff7816cf"
                    }
                },
                {
                    languageName: "CSS",
                    img: CSS,

                    progress: {
                        completed: 45,
                        bgcolor: "#46a5f0"
                    }
                },
                {
                    languageName: "JavaScript",
                    img: JavaScript,

                    progress: {
                        completed: 75,
                        bgcolor: "#f6c54f"
                    }
                },
                {
                    languageName: "React",
                    img: ReactImage,

                    progress: {
                        completed: 35,
                        bgcolor: "#1ec6e4"
                    }
                },
                {
                    languageName: "Node JS",
                    img: Node,

                    progress: {
                        completed: 40,
                        bgcolor: "#6dac5c"
                    }
                },
                {
                    languageName: "Swift",
                    img: swift,

                    progress: {
                        completed: 55,
                        bgcolor: "#ffa375"
                    }
                },
                // {
                //     languageName: "PHP",
                //     img: php,

                //     progress: {
                //         completed: 25,
                //         bgcolor: "#7489cf"
                //     }
                // },
            ]
        }
    }
    render() {
        const list = this.state.CoursesPage.map((item, index) => {
            return (
                <UserContainer value={this.props.value} key={index}>
                    <div className={ContentStyle.programLanguages}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className={ContentStyle.languageName}>
                        <div className={ContentStyle.medium_languageName_block}>
                            <p>{item.languageName}</p>
                        </div>
                        <div>
                            <ProgressBar completed={item.progress.completed} bgcolor={item.progress.bgcolor}
                                height={14} labelSize="12px" borderRadius="2px" />
                        </div>
                    </div>
                </UserContainer>
            );
        }

        )
        return (
                <div style={{marginTop: '40px'}}>
                    {list}
                </div>
        );
    }
}