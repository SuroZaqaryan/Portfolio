import React from 'react';
import {Button} from "antd";
import {LeftOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

export default function BackButton() {
    const AntButton = {
        padding: '0px 8px',
        paddingLeft: '6px',
        fontSize: '11px',
        color: '#e2e6ef',
        background: '#00000017',
        borderColor: 'hsl(0deg 0% 0% / 3%)',
        height: '29px',
    }

    const AndButtonText = {
        marginLeft: '1px',
        fontSize: '12px',
        letterSpacing: '0.4px',
        color: '#e2e6ef',
        fontFamily: 'Rubik, sans-serif',
    }
    return (
        <NavLink className={"Back_To_Content"} to={"/content"}>
            <Button style={AntButton} type="primary" icon={<LeftOutlined style={{fontSize: "10px"}}/>} size={"middle"}>
                <span style={AndButtonText}>Back</span>
            </Button>
        </NavLink>
    );
}