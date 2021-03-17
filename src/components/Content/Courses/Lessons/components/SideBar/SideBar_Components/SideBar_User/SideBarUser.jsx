import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../css/Sidebar.css"

export function SideBarUser(props) {
    const { SideBarThemesColors } = props;
    if (!props.profile) {
        return <p>Loading...</p>
    }
    const { profile } = props;
    return (
        <div className="sidebar-header">
                <div className="user-pic">
                    <img
                        className="img-responsive img-rounded"
                        src={profile.photos.small ? profile.photos.small : "https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
                        alt="User picture"
                    />
                </div>

                <div className="user-info">
                <NavLink to={'/profile/' + profile.userId}>
                    <span className="sidebar_user_name">
                        <strong style={{ color: SideBarThemesColors ? SideBarThemesColors : window.$sideBarDefaultColor}}>{profile.fullName}</strong>
                    </span>
                    </NavLink>
                    <span className="user-status">
                        <i className="fa fa-circle"></i>
                        <span style={{ color: SideBarThemesColors ? SideBarThemesColors : window.$sideBarDefaultColor, fontSize: "13px" }}>Online</span>
                    </span>
                </div>
        </div>
    );
}