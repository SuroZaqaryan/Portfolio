import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faUser
} from "@fortawesome/free-solid-svg-icons";

export class UserSettings extends React.Component {

    constructor(props) {
        super(props);
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
                    icon: faUser,
                },

                {
                    titleSettings: "Looking for a job description",
                    dataSettings: lookingForAJobDescription,
                    icon: faUser,
                },

                {
                    titleSettings: "User ID",
                    dataSettings: userId,
                    icon: faUser,
                },
            ]
        };
    }


    render() {

        const listSettings = this.state.accountSettings.map((item, index) => {
            return (
                <div key={index} className="accountSettingsContainer">
                    <div className="titleSettings">
                        <p> {item.titleSettings} </p>
                    </div>

                    <div className="accountInfoAndIcon">
                        <div>
                            <p>{item.dataSettings ? item.dataSettings : "Not filled"}</p>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={item.icon} />
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