import React from 'react';
import avatarDefault from "../../../../backgrounds/20980408.png";
import "../../css/style.css"

export const UserAvatarBlock = (props) => {
    return(
        <div className="avatarInfo">
            <div>
                <img className="avatarDefault" src={avatarDefault} alt=""/>
            </div>

            <div>
                <div className="userName">
                    <p>{props.profile.fullName}</p>
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
    );
};