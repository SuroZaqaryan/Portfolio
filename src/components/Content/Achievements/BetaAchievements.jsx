import React from 'react';
import "./Achievements.css";

import crown from "./icons/online-course.png"
import goal from "./icons/goal.png"
import money from "./icons/money.png"
import target from "./icons/target.png"
import clipboard from "./icons/clipboard.png"
import climbing from "./icons/climbing.png"
import {ColorCard} from "./RandomColors/Colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";

export class AchievementsBeta extends React.Component {
    constructor() {
        super();
        this.state = {
            CoursesPage: [
                {
                    img: crown,
                    cardInfo: "Engaged in!",
                    cardLabel: "Complete the lesson",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: goal,
                    cardInfo: "The first path to victory",
                    cardLabel: "complete five courses",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: money,
                    cardInfo: "Piggy bank",
                    cardLabel: "Earn 100 XP",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: target,
                    cardInfo: "Sniper",
                    cardLabel: "Complete the course without errors",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: clipboard,
                    cardInfo: "Dear Citizen",
                    cardLabel: "Fill in all credentials",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: climbing,
                    cardInfo: "My first avatar",
                    cardLabel: "Set avatar",
                    cardColorStyle: 'card__fire',
                },
            ],

            checked: false,

            bgColor: [
                '#1ec891',
                '#ff725e',
                '#ffd05b',
            ],

            selectedColor: '',
        }
    }

    componentDidMount() {
        this._getRandomColor()
    }

    _getRandomColor() {
        const item = this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
        this.setState({
            selectedColor: item,
        })
    }

    render() {

        const resultsRender = this.state.CoursesPage.map((user, index) => {
                return (

                    <div key={index}>
                        <div className={"card_ac_container"}>
                            <div className={`${"Beta"} ${"card__fire"}`}>
                                <div className={"imgContainer"}>
                                    <ColorCard/>
                                    <div>
                                        <img src={user.img} alt=""/>
                                    </div>
                                </div>

                                <div>
                                    <div className="cardInfo">
                                        <p>{user.cardInfo}</p>
                                    </div>

                                    <div className="cardDescription">
                                        <p>{user.cardLabel}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {
                                    this.state.checked ?
                                        <FontAwesomeIcon style={{fontSize: "20px", color: "#9dffb6"}} icon={faCheckCircle}/>
                                        :
                                        <FontAwesomeIcon style={{fontSize: "20px", color: "#ff7b77"}} icon={faTimesCircle}/>
                                }
                            </div>
                        </div>
                    </div>

                );
            }
        );

        return (
            <div>
                <div className="TitleAchivementsContainer">
                    <div className="TitleAchivements">
                        <p>Achivements</p>
                    </div>

                    <div className="TitleAchivements">
                        <p>Achivements</p>
                    </div>
                </div>

                {resultsRender}
            </div>
        );
    }
}


