import React, { Fragment } from 'react';
import less from "./css/lesson.module.css";
import "./css/activeLink.css";
import "./css/Edited_Navbar_For_Lessons_Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactHtmlParser from 'react-html-parser';
import * as Icon from 'react-bootstrap-icons';
import styled from "styled-components";

import { slide as Menu } from 'react-burger-menu'
import NavbarMobileContainer from "../../../Navbar/Mobile_Navbar/NavbarMobile_Container";
import NavbarContainer from '../../../Navbar/NavbarContainer';

export const Test = styled.li`
  color: green;
`;

const NextPage = styled.button`
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #ff7b77d9;
    padding: 9px 22px;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    border: 1px solid #ff7b77d9;
    border-radius: 2px;
`;

const LessonParagraph = styled.p`
  color: ${props => (props.value ? "#e4e4e4" : "#304455")};
  line-height: 1.5;
`;

const LessonTitle = styled.h2`
  color: ${props => (props.value ? "#ff7b77" : "#282c34")};
  font-weight: 500;
  font-size: 22px;
`;


export class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexDescription: 1,
            listActiveIndex: 1,
            sidebarMobile: false,
            sidebarMobileChangeBackground: false,
            menuMobileIsOpen: false,
            background: 'rgb(140 140 140 / 32%)'
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if (window.innerWidth > 900) {
            this.setState({ sidebarMobile: true })
            this.setState({ menuMobileIsOpen: false })
        } else {
            this.setState({ sidebarMobile: false })
        }
    }

    showsidebarMobile = () => {
        this.setState({ sidebarMobile: !this.state.sidebarMobile })
        this.setState({ sidebarMobileChangeBackground: !this.state.sidebarMobileChangeBackground })
    }

    hideMenu() {
        if (window.innerWidth < 900) {
            this.setState({ sidebarMobile: false })
            this.setState({ sidebarMobileChangeBackground: false })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    changeDescription(index) {
        this.setState({ indexDescription: index, listActiveIndex: index })
    }

    nextPage() {
        // next page
        this.setState({ indexDescription: this.state.indexDescription + 1, listActiveIndex: this.state.indexDescription + 1 })
    }

    prevPage() {
        // next page
        this.setState({ indexDescription: this.state.indexDescription - 1, listActiveIndex: this.state.indexDescription - 1 })
    }

    menuMobileIsOpen = () => {
        this.setState({ menuMobileIsOpen: !this.state.menuMobileIsOpen })
    }

    HideMenuMobileIsOpen = () => {
        this.setState({ menuMobileIsOpen: false })
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {

        let DarkeningMobileBackground = 'DarkeningMobileBackground';
        let visible = 'visible';

        if (this.state.menuMobileIsOpen) {
            visible += '-Active'
        }

        if (this.state.menuMobileIsOpen || this.state.sidebarMobileChangeBackground) {
            DarkeningMobileBackground += '-Active';
        }

        const listLessons = this.props.lesson.map((item, index) => {

            // active link
            const className = this.state.listActiveIndex === index ? 'list_active' : null;

            return (
                <Fragment key={index}>
                    {item.title && (
                        <li className={less.courseTitle}>
                            <p>{item.title}</p>
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
                <div className="backgroundTrnasp"></div>
                <div className="abc">
                    <div>
                        <NavbarContainer color="blue" bg="tomato" centerFlexNavbarContainer="flex" LiItem="NavBarli" MainStream="MainStream"
                            navbarSearchPage="Search" navbarHomePage="Home" NavbarMobileIconsBlock="mobile"
                            centerHeadlineNavbarColumn="center" showsidebarMobile={this.showsidebarMobile}
                            menuMobileIsOpen={this.menuMobileIsOpen} headerMobile="headerMobileLessonsPage" value={this.props.value} />

                        <div>
                            <div className={`${less.navigation_menu} ${visible}`}>
                                {
                                    this.state.menuMobileIsOpen ?
                                        <NavbarMobileContainer />
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>

                    <div className={`${less.wrapper} ${DarkeningMobileBackground}`}>
                        <Menu isOpen={this.state.sidebarMobile} >
                            <main id="page-wrap">
                                <div className={less.sidebar}>
                                    <ul onClick={this.hideMenu.bind(this)}>
                                        {listLessons}
                                    </ul>
                                </div>
                            </main>
                        </Menu>

                        <div>
                            <div className={less.main_content}>
                                <div className={less.main_inside_content}>
                                    <div className={less.header}>
                                        <div className={less.header_next_page}>
                                            <LessonTitle value={this.props.value}>{this.props.lesson[this.state.indexDescription]["heading"]}</LessonTitle>
                                        </div>
                                    </div>
                                    <div className={less.info} onClick={this.HideMenuMobileIsOpen.bind(this)}>
                                        <div className={less.description}>
                                            <LessonParagraph value={this.props.value}>
                                                {
                                                    ReactHtmlParser(this.props.lesson[this.state.indexDescription]["data"]["description"])
                                                }
                                            </LessonParagraph>

                                            <div className={less.btn_Next_Prev_Container}>
                                                <div>
                                                    {
                                                        this.state.indexDescription >= 2 ?
                                                            <NextPage onClick={this.prevPage.bind(this)} > <Icon.ArrowLeft className={less.arrowLeft} /> Back </NextPage>
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div>
                                                    <NextPage onClick={this.nextPage.bind(this)} > Next <Icon.ArrowRight className={less.arrowRight} /> </NextPage>
                                                </div>
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