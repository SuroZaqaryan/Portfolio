import React, { Fragment } from 'react';
import less from "./css/lesson.module.css";
import "./css/activeLink.css";
import "./css/betaLesson.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../../../Navbar/Navbar";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexDescription: 1,
            listActiveIndex: 1,
        }
    }

    changeDescription(index) {
        this.setState({ indexDescription: index })

        // active link
        this.setState({ listActiveIndex: index });
    }

    render() {
        const listLessons = this.props.lesson.map((item, index) => {

            // active link
            const className = this.state.listActiveIndex === index ? 'list_active' : null;

            return (
                <Fragment key={index}>

                    {item.title && (
                        <li className={less.courseTitle}>
                            <div>
                                <p>{item.title}</p>
                            </div>
                        </li>
                    )}

                    {item.titleName && (
                        <li className={className} onClick={this.changeDescription.bind(this, index)}>
                            <div className={less.sidebar_list}>
                                <div style={{ display: "flex" }}>
                                    <FontAwesomeIcon className={less.item_icon} icon={item.iconName} />
                                </div>
                                <div className={less.titleName}>
                                    <div>
                                        <p>{item.titleName}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </Fragment>
            );
        });

        return (
            <>
                <div className="abc">
                    <Navbar color="blue" bg="tomato" centerFlexNavbarContainer="flex"
                        navbarSearchPage="Search" navbarHomePage="Home" centerHeadlineNavbarColumn="center" />
                    <div className={less.wrapper}>

                        <div>
                            <div className={less.sidebar}>
                                <div>
                                    <ul>
                                        {listLessons}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={less.main_content}>
                            <div className={less.main_inside_content}>
                                <div className={less.header}>
                                    <div>
                                        <h2>{this.props.lesson[this.state.indexDescription]["heading"]}</h2>
                                    </div>
                                </div>
                                <div className={less.info}>
                                    <div className={less.description}>
                                        <p>
                                            {
                                                ReactHtmlParser(this.props.lesson[this.state.indexDescription]["description"])
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