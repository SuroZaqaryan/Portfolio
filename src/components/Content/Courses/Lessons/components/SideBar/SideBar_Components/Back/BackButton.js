import React from 'react';
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./BackButton.css";

export default function BackButton(props) {
    const AndButtonText = {
        marginLeft: '1px',
        fontSize: '11px',
        letterSpacing: '0.4px',
        color: '#ffffff',
        fontFamily: 'Rubik, sans-serif',
    }

    const BackButtonBg = props.SideBarTheme && props.SideBarTheme.BackButtonBg ? props.SideBarTheme.BackButtonBg : "#0000000d"

    return (
        <NavLink className={"Back_To_Content"} to={"/content"}>
            <Button
                className="BackButton"
                style={{
                    background: BackButtonBg,
                    borderColor: '#0000000f',
                    padding: '0px 8px',
                    paddingLeft: '6px',
                    fontSize: '11px',
                    color: '#e2e6ef',
                    height: '28px',
                    }}
                type="primary" icon={<LeftOutlined style={{ fontSize: "11px", paddingTop: "4px" }} />} size={"middle"}>
                <span style={AndButtonText}>Back</span>
            </Button>
        </NavLink>
    );
}