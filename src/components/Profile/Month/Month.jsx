import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";
import {Github} from "react-color/lib/components/github/Github";

export class MonthBox extends React.Component {

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
        }

        const dateStyle = {
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            background: "yellow",
            width: "Max-Content",
            padding: "5px 10px 5px 10px",
            marginRight: "10px",
        }

        const dateInsideBlockStyle = {
            paddingRight: "10px",
        }


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

                <div style={dateStyle}>
                    <div style={dateInsideBlockStyle}>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </div>

                    <div>
                        <p>Facebook</p>
                    </div>
                </div>

                <div style={dateStyle}>
                    <div style={dateInsideBlockStyle}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>

                    <div>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        );
    }
}
