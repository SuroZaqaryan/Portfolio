import React from 'react';
import "./Achievements.css";

import crown from "./icons/crown.png"
// import brain from "./icons/brain.png";
// import money from "./icons/money.png"
// import book from "./icons/open-book.png"
// import success from "./icons/success.png"
// import target from "./icons/target.png"
// import macbook from "./icons/macbook.png"
// import headset from "./icons/headset.png"
// import coffee from "./icons/coffee.png"

export class AchievementsBeta extends React.Component {
    constructor() {
        super();
        this.state = {
            CoursesPage: [
                {
                    img: crown,
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Earn 500 XP",
                    cardColorStyle: 'card__fire',
                },
                
                {
                    img: crown,
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Earn 500 XP",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: crown,
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Earn 500 XP",
                    cardColorStyle: 'card__fire',
                },
            ],
        }
    }

    render() {

        const resultsRender = this.state.CoursesPage.map((user, index) => {
            return (

                <div style={{ width: "100%", marginBottom: "25px" }} key={index}>
                    <div className={`${"Beta"} ${user.cardColorStyle}`}>
                        <div className={"imgContainer"}>
                            <img src={user.img} alt="" />
                        </div>

                        <div>
                            <div className="cardInfo">
                                <p>{user.cardInfo}</p>
                            </div>

                            <div>
                                <p>{user.cardLabel}</p>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }

        );

        return (
            <div>
                {resultsRender}
            </div>
        );
    }
}
