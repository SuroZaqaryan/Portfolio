import React from 'react';
import less from "./css/lesson.module.css";
import "./css/betaLesson.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../../../Navbar/Navbar";

export class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexDescription: 0,
        }
    }

    render() {
        const listLessons = this.props.lesson.map((item, index) => {
            return (
                <ul key={index}>
                    <li className={less.sidebar_list} onClick={() => {
                        this.setState({ indexDescription: index })
                    }}>
                        <div>
                            <FontAwesomeIcon className={less.item_icon} icon={item.iconName} />
                        </div>

                        <div className={less.titleName}>
                            <p>{item.titleName}</p>
                        </div>
                    </li>
                </ul>
            );
        });


        return (
            <>
                <div className="abc">
                    <Navbar color="blue" bg="tomato" centerFlexNavbarContainer="flex"
                    navbarSearchPage="Search" navbarHomePage="Home" centerHeadlineNavbarColumn="center"/>
                    <div className={less.wrapper}>

                        <div className={less.sidebar}>
                            {/*<div className={less.logo}>*/}
                            {/*    <img src={bg} alt=""/>*/}
                            {/*</div>*/}
                            <div>
                                <ul>
                                    {listLessons}
                                </ul>
                            </div>
                        </div>

                        <div className={less.main_content}>
                            <div className={less.main_inside_content}>
                                <div className={less.header}>
                                    <div>
                                        <h2>JavaScript JSON Reference</h2>
                                    </div>
                                </div>
                                <div className={less.info}>
                                    <div className={less.description}>
                                        <p>
                                            {
                                                this.props.lesson[this.state.indexDescription]["description"]
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}