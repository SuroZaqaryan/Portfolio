import React, { Fragment } from 'react';
import less from "./css/lesson.module.css";
import "./css/activeLink.css";
import "./css/betaLesson.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../../../Navbar/Navbar";
import ReactHtmlParser from 'react-html-parser';
import * as Icon from 'react-bootstrap-icons';
import styled from "styled-components";

const NextPage = styled.button`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #ff7b77d9;
    padding: 10px 23px;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    border: 1px solid #ff7b77d9;
    border-radius: 2px;
`;

export class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexDescription: 1,
            listActiveIndex: 1,
        }
    }

    changeDescription(index) {
        this.setState({ indexDescription: index , listActiveIndex: index})
    }

    nextPage() {
        // next page
        this.setState({ indexDescription: this.state.indexDescription + 1,  listActiveIndex: this.state.indexDescription  + 1})
    }

    prevPage() {
        // next page
        this.setState({ indexDescription: this.state.indexDescription - 1,  listActiveIndex: this.state.indexDescription  - 1})
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
                    <Navbar color="blue" bg="tomato" centerFlexNavbarContainer="flex" LiItem="NavBarli" MainStream="MainStream"
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
                                    <div className={less.header_next_page}>
                                        <div>
                                            <h2>{this.props.lesson[this.state.indexDescription]["heading"]}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className={less.info}>
                                    <div className={less.description}>
                                        {
                                            ReactHtmlParser(this.props.lesson[this.state.indexDescription]["data"]["description"])
                                        }
                                        <div className={less.btn_Next_Prev_Container}>
                                            <div>
                                                {
                                                    this.state.indexDescription >= 2 ?
                                                    <NextPage  onClick={this.prevPage.bind(this)} > <Icon.ArrowLeft className={less.arrowLeft}/> Back </NextPage>
                                                    :
                                                    null
                                                }  
                                            </div>
                                            <div>
                                                <NextPage  onClick={this.nextPage.bind(this)} > Next <Icon.ArrowRight className={less.arrowRight}/> </NextPage>  
                                            </div>
                                        </div>
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