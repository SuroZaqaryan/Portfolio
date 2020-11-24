import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFingerprint,
    faPenSquare,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";

export class UserSettings extends React.Component {

    constructor(props) {
        super(props);
        if (!props.profile) {
            return null;
        }
        const { fullName, lookingForAJob, lookingForAJobDescription, userId } = this.props.profile;

        this.state = {
            accountSettings: [
                {
                    titleSettings: "Username",
                    dataSettings: fullName,
                    icon: faUser,
                },

                {
                    titleSettings: "Looking for a job",
                    dataSettings: lookingForAJob,
                    icon: faBriefcase,
                },

                {
                    titleSettings: "Looking for a job description",
                    dataSettings: lookingForAJobDescription,
                    icon: faPenSquare,
                },

                {
                    titleSettings: "User ID",
                    dataSettings: userId,
                    icon: faFingerprint,
                },
            ]
        };
    }


    render() {

        const listSettings = this.state.accountSettings.map((item, index) => {
            return (
                <div key={index} className="accountSettingsContainer">
                    <div className="titleSettings">
                        <p style={{color: "#a9adb3"}}> {item.titleSettings} </p>
                    </div>

                    <div className="accountInfoAndIcon">
                        <div>
                            <p style={{fontWeight: "600", fontSize: "16px", fontFamily: "system-ui"}}>{item.dataSettings ? item.dataSettings : "Not filled"}</p>
                        </div>

                        <div>
                            <FontAwesomeIcon style={{fontSize: "19px"}} icon={item.icon} />
                        </div>
                    </div>
                </div>
            );
        });


        return(
            <>
                {listSettings}
            </>
        );
    }
}