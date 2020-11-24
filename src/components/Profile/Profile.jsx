import React, {useState} from 'react';
import {Navbar} from '../Navbar/Navbar';
import "./css/style.css"
import {AchievementsBeta} from "../Content/Achievements/BetaAchievements";
import {UserSettings} from './ProfileContent/UserSettings/UserSettings';
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {DateTimeProfile} from "./Month/Clock";
import {UserCertificates} from "./ProfileContent/UserCertificate/UserCertificates";
import {AboutFormUsers} from "./ProfileContent/AboutFormUser/AboutFormUsers";
import {TopContent} from "./ProfileContent/topContent/topContent";
import {UserAvatarBlock} from "./ProfileContent/UserAvatarBlock/UserAvatarBlock";

export const Profile = (props) => {

    const [value, onChange] = useState(new Date());

    if (!props.profile) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
                <Navbar {...props}/>
            </div>

            <div className="contentProfile">
                <div className="userProfileInfo">

                    <UserAvatarBlock {...props} />

                    <div className="profileHrContainer">
                        <hr className={"profileHR"}/>
                    </div>

                    <div style={{margin: "20px"}}>
                        <div className="accountSettings">
                            <UserSettings {...props} />
                        </div>

                        <div>
                            <AboutFormUsers {...props} status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                    </div>
                </div>

                <div className="achivements">
                    <div>
                        <TopContent {...props} />
                    </div>

                    <div className={"centerColumnLine"}>
                        <hr/>
                    </div>

                    <div className="UserAchivements">
                        <AchievementsBeta/>
                    </div>
                </div>

                <div className="messages">
                    <div className="DateTimeProfile">
                        <DateTimeProfile/>
                    </div>

                    <div>
                        <Calendar onChange={onChange} value={value} className={"Calendar"}/>
                    </div>

                    <div>
                        <UserCertificates/>
                    </div>
                </div>
            </div>
        </div>
    )
};