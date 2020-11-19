import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";

export class MonthBox extends React.Component {

    constructor() {
        super();
        this.state = {
            profileData: [
                {
                    link: "/link1",
                    icon: faFacebook,
                    iconTitle: "Facebook",
                },

                {
                    link: "/link2",
                    icon: faGithub,
                    iconTitle: "GitHub",
                }
            ],

            month: [

            ]
        }
    }

    render() {

        const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        const d = new Date();
        const n = month[d.getMonth()];
        const c = d.getMonth();

        const headlineDateStyle = {
            display: "flex",
            alignItems: "center",
        };

        const dateStyle = {
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            width: "Max-Content",
            padding: "5px 10px 5px 10px",
            marginRight: "10px",
            fontSize: "14px",
            paddingLeft: "0",
        };

        const dateInsideBlockStyle = {
            paddingRight: "10px",
        };

        const profileNavLinkStyle = {
            fontSize: "14px",
            color: "black",
        };

        const list = this.state.profileData.map((item, index) => {
                return (
                    <NavLink to={item.link} style={profileNavLinkStyle} key={index}>
                        <div style={dateStyle}>
                            <div style={dateInsideBlockStyle}>
                                <FontAwesomeIcon icon={item.icon}/>
                            </div>

                            <div>
                                <p>{item.iconTitle}</p>
                            </div>
                        </div>
                    </NavLink>
                );
            }
        );

        return (
            <div style={headlineDateStyle}>
                <div style={dateStyle}>
                    <div style={dateInsideBlockStyle}>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>

                    <div>
                        <p>Deadline: {n}, {c}</p>
                    </div>
                </div>

                {list}
            </div>
        );
    }
}
