import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import "./css/style.css"
import avatarDefault from "../../backgrounds/20980408.png"
import { MonthBox } from './Month/Month';
import { AchievementsBeta } from "../Content/Achievements/BetaAchievements";
import { UserSettings } from './ProfileContent/UserSettings/UserSettings';

export class Profile extends React.Component {

    render() {
        if (!this.props.profile) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div className="contentProfile">
                    <div className="userProfileInfo">

                        <div className="avatarInfo">
                            <div>
                                <img className="avatarDefault" src={avatarDefault} alt="" />
                            </div>

                            <div>
                                <div className="userName">
                                    <p>{this.props.profile.fullName}</p>
                                </div>

                                <div className="profileSettings">
                                    <p>Profile Settings</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="line"></div>
                                </div>

                                <div className="userInformation">
                                    <p>User Information</p>
                                </div>
                            </div>
                        </div>

                        <div className="profileHrContainer">
                            <hr className={"profileHR"} />
                        </div>

                        <div className="accountSettings">

                            <UserSettings {...this.props} />

                        </div>
                    </div>

                    <div className="achivements">
                        <div className="achivementsTitleContainer">
                            <div className="AchivementsTitleDescription">
                                <p>Achivements</p>
                            </div>

                            <div>
                                <div className="achivementsTitle">
                                    <h3>Keep on completing achievements and become one of the best coders</h3>
                                </div>

                                <div className="achivementsText">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem doloribus eos
                                    expedita fugit
                                    id illum ipsam laborum maiores maxime nemo neque nihil nostrum quasi similique
                                        soluta totam ullam, unde vel!</p>
                                </div>

                                <div className="achivementsText">
                                    <MonthBox />
                                </div>
                            </div>
                        </div>

                        <div className="UserAchivements">

                            <div className="TitleAchivementsContainer">
                                <div className="TitleAchivements">
                                    <p>Achivements</p>
                                </div>

                                <div className="TitleAchivements">
                                    <p>Achivements</p>
                                </div>
                            </div>

                            <AchievementsBeta />
                        </div>
                    </div>

                    <div className="messages">

                    </div>
                </div>
            </div>
        )
    }
}
