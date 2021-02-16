import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Modal from "antd/es/modal/Modal";
import "./style.css";
import SideBarBlurChange from "../SideBar_BlueRange/SideBarBlurChange";
import { Button } from "antd";
import ThemeSettings from './setting-theme.png';

const DraggableDialog = (props) => {
    const [visible, setVisible] = useState(false);

    const handleOk = () => {
        setVisible(false)
    }

    return (
        <>

            <div style={{ display: "flex", alignItems: "center", width: "100%",}}>
                <div style={{ display: "flex" }}>
                    <img width="17" height="17" src={ThemeSettings} alt="Settings"/>
                </div>

                <div style={{marginLeft: "10px"}}>
                    <span onClick={() => setVisible(true)}>
                        Themes
                    </span>
                </div>
            </div>

            <Modal
                title="Customize the theme to your liking"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={670}

                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => handleOk()}
                    >
                        Apply
                    </Button>
                ]}
            >
                <div className={"SideBarModal_Wrapper"}>
                    <div className={"SideBarModal_Appearance"}>
                        <div className={"SideBarModal_Child_Appearance"}>
                            <p>Appearance:</p>
                        </div>

                        <div style={{ marginLeft: "5px" }}>
                            {props.SideBarWallpaperList}
                        </div>
                    </div>

                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"} />
                    </div>

                    <div className={"SideBarModal_Accept_Color"}>
                        <div className={"SideBarModal_Child_Color"}>
                            <p>Gradient color:</p>
                        </div>

                        <div>
                            {props.gradientList}
                        </div>
                    </div>
                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"} />
                    </div>
                    <div>
                        <div className={"SideBarModal_Child_Color"}>
                            <p>Blur Change</p>
                        </div>
                        <div>
                            <SideBarBlurChange {...props} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DraggableDialog;