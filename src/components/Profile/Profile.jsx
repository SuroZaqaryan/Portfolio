import React from 'react';
import {Navbar} from '../Navbar/Navbar';
import "./css/style.css"
import avatarDefault from "../../backgrounds/20980408.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { MonthBox } from './Month/Month';

export class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {


        if (!this.props.profile) {
            return <p>Loading...</p>
        }

        const d = new Date();
        const n = d.getMonth();

        return (
            <div>
                <div>
                    <Navbar/>
                </div>

                <div className="contentProfile">
                    <div className="userProfileInfo">
                        <div className="avatarInfo">
                            <div>
                                <img className="avatarDefault" src={avatarDefault} alt=""/>
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
                            <hr className={"profileHR"}/>
                        </div>
                        <div className="accountSettings">

                            <div className="accountSettingsContainer">
                                <div className="titleSettings">
                                    <p>Username</p>
                                </div>

                                <div className="accountInfoAndIcon">
                                    <div>
                                        <p>{this.props.profile.fullName}</p>
                                    </div>

                                    <div>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </div>
                            </div>

                            <div className="accountSettingsContainer">
                                <div className="titleSettings">
                                    <p>Looking for a job</p>
                                </div>

                                <div className="accountInfoAndIcon">
                                    <div>
                                        <p>{this.props.profile.lookingForAJob ?
                                            <p>{this.props.profile.lookingForAJob}</p> :
                                            <p>Not filled</p>}</p>
                                    </div>

                                    <div>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </div>
                            </div>

                            <div className="accountSettingsContainer">
                                <div className="titleSettings">
                                    <p>Looking for a job</p>
                                </div>

                                <div className="accountInfoAndIcon">
                                    <div>
                                        <p>{this.props.profile.lookingForAJobDescription ? <p>Yes</p> :
                                            <p>Not filled</p>}</p>
                                    </div>

                                    <div>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </div>
                            </div>

                            <div className="accountSettingsContainer">
                                <div className="titleSettings">
                                    <p>Looking for a job</p>
                                </div>

                                <div className="accountInfoAndIcon">
                                    <div>
                                        <p>{this.props.profile.userId}</p>
                                    </div>

                                    <div>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div>
                                </div>
                            </div>

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

                        </div>
                    </div>

                    <div className="messages">

                    </div>
                </div>
            </div>
        )
    }
}
