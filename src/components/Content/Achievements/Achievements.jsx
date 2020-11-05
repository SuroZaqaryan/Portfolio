import React from 'react';
import "./Achievements.css";

import crown from "./icons/crown.png"
import brain from "./icons/brain.png";
import money from "./icons/money.png"
import book from "./icons/open-book.png"
import success from "./icons/success.png"
import target from "./icons/target.png"
import macbook from "./icons/macbook.png"
import headset from "./icons/headset.png"
import coffee from "./icons/coffee.png"

export class Achievements extends React.Component {
    constructor() {
        super();
        this.state = {
            CoursesPage: [
                {
                    img: crown,
                    cardName: "Eevee",
                    cardType: "normal",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Run Away",
                    cardColorStyle: 'card__fire',
                },

                {
                    img: success,
                    cardName: "Jolteon",
                    cardType: "electric",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Volt Absorb",
                    cardColorStyle: 'card__water',
                },

                {
                    img: target,
                    cardName: "Leafeon",
                    cardType: "grass",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Leaf Guard",
                    cardColorStyle: 'card__grass',
                },

                {
                    img: brain,
                    cardName: "Espeon",
                    cardType: "psychic",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Synchronize",
                    cardColorStyle: 'card__psychic',
                },

                {
                    img: money,
                    cardName: "Flareon",
                    cardType: "fire",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Flash Fire",
                    cardColorStyle: 'card__normal',
                },

                {
                    img: headset,
                    cardName: "Vaporeon",
                    cardType: "water",
                    cardInfo: "Complete 3 courses",
                    cardLabel: "Ability",
                    cardLabelInfo: "Absorb",
                    cardColorStyle: 'card__electric',
                },

                // {
                //     img: macbook,
                //     cardName: "Vaporeon",
                //     cardType: "water",
                //     cardInfo: "Complete 3 courses",
                //     cardLabel: "Ability",
                //     cardLabelInfo: "Absorb",
                //     cardColorStyle: 'card__electric',
                // },
                //
                // {
                //     img: book,
                //     cardName: "Vaporeon",
                //     cardType: "water",
                //     cardInfo: "Complete 3 courses",
                //     cardLabel: "Ability",
                //     cardLabelInfo: "Absorb",
                //     cardColorStyle: 'card__electric',
                // },
                //
                // {
                //     img: coffee,
                //     cardName: "Vaporeon",
                //     cardType: "water",
                //     cardInfo: "Complete 3 courses",
                //     cardLabel: "Ability",
                //     cardLabelInfo: "Absorb",
                //     cardColorStyle: 'card__electric',
                // },
            ],
        }
    }

    render() {

        const resultsRender = [];

        for (var i = 0; i < this.state.CoursesPage.length; i += 3) {
            resultsRender.push(
                <div className="clearfix">
                    {
                        this.state.CoursesPage.slice(i, i + 3)
                            .map((user, index) => {
                                return (
                                    <div key={index}>
                                        <div className={`${"card"} ${user.cardColorStyle}`}>
                                            <div className="card__image_container">
                                                <img src={user.img} alt="Eevee" className="card__image" />
                                            </div>
                                            <figcaption className="card__caption">
                                                <h1 className="card__name">{user.cardName}</h1>

                                                <h4 className="card__type">{user.cardType}</h4>

                                                <table className="card__stats">
                                                    <tbody>
                                                        <tr>
                                                            <th><p className="card__info">{user.cardInfo}</p></th>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="card__abilities">
                                                    <h4 className="card__ability">
                                                        <span className="card__label">{user.Ability}</span>
                                                        <p className="card__label__info">{user.cardLabelInfo}</p>
                                                    </h4>
                                                </div>
                                            </figcaption>
                                        </div>
                                    </div>
                                );
                            }
                            )
                    }
                </div>
            );
        }


        return (
            <div id="cards">
                <div className="bannerBlock">
                    {/* <div className="iconBannerBlock">
                        <img src={achievements} alt=""/>
                    </div> */}
                </div>

                <div className="headlineSecond">
                    <div className="Second" style={{width: "100%"}}>
                        {resultsRender}
                    </div>
                </div>
            </div>
        );
    }
}
