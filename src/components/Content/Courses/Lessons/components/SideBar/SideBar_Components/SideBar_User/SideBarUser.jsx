import React from "react";
import "../../../../css/Sidebar.css"

export function SideBarUser(props) {
    return (
        <div className="sidebar-header">
            <div className="user-pic">
                <img
                    className="img-responsive img-rounded"
                    src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/25552320_10155560223259678_8307290088032102953_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=1ksbXQO_NRoAX_6_07Z&_nc_ht=scontent.fevn1-4.fna&oh=8706cdd1415ef3c17b9b4b7c9d854438&oe=6039AA0A"
                    alt="User picture"
                />
            </div>

            <div className="user-info">
                <span className="sidebar_user_name">
                    <strong>Jhon Smith</strong>
                </span>

                <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                </span>
            </div>
        </div>
    );
}