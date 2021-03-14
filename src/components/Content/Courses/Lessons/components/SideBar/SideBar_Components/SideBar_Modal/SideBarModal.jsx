import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Modal from "antd/es/modal/Modal";
import "./css/style.css";
import SideBarBlurChange from "../SideBar_BlueRange/SideBarBlurChange";
import {Button} from "antd";
import {ThemeIcon} from "./ThemeIcon";
import { Typography } from 'antd';
import SelectGradientTheme from "../../../Theme/SelectThemePictures/SelectGradientTheme";
import Paragraph from "antd/es/typography/Paragraph";
import SelectColorsTheme from "../../../Theme/SelectThemePictures/SelectColorsTheme";
import SideBarWallpaperContainer from "../../../Theme/SideBarWallpaper/SideBarWallpaperContainer";
const { Text } = Typography;

const DraggableDialog = (props) => {
    const [visible, setVisible] = useState(false);
    const {SideBarThemesColors} = props;

    const handleOk = () => {
        setVisible(false)
    }

    return (
        <>
            <div className={"sidebar_themes_settings"}>
                <div>
                    <ThemeIcon ItemColor={SideBarThemesColors}/>
                </div>

                <div className={"sidebar_themes_settings_text"}>
                    <span style={{color: SideBarThemesColors ? SideBarThemesColors : window.$sideBarDefaultColor}}
                          onClick={() => setVisible(true)}>
                        Themes
                    </span>
                </div>
            </div>

            <Modal
                title="Preferences"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"780px"}
                style={{maxWidth: "100%"}}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => handleOk()}
                    >
                        <span className={"sidebar_modal_apply_button"}>Apply</span>
                    </Button>
                ]}
            >
                <div style={{overflowY: "scroll"}} className={"SideBarModal_Wrapper"}>
                    <div>
                        <Text strong>Colors</Text>
                        <Paragraph className={"sidebar_modal_title"}>
                            Customize the look of your workspace. Feeling adventurous?
                        </Paragraph>
                    </div>
                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div>
                        <div className={"SideBarModal_Child_Appearance Appearance"}>
                            <Text strong>Appearance:</Text>
                        </div>

                        <div className={"SideBarModal_Appearance"}>
                            <SideBarWallpaperContainer {...props} />
                        </div>
                    </div>

                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div>
                        <div className={"SideBarModal_Child_Color"}>
                            <p>Blur Settings</p>
                        </div>
                        <div>
                            <SideBarBlurChange {...props} />
                        </div>
                    </div>

                    <div className={"SideBarModal_Accept_Color_Gradient"}>
                        <div className={"SideBarModal_Accept_Color_Gradient_block"}>
                            <Text type="secondary">Gradients</Text>
                        </div>
                        <div>
                            <SelectGradientTheme {...props} />
                        </div>
                    </div>

                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div className={"SideBarModal_Accept_Color"}>
                        <div className={"SideBarModal_Child_Color"}>
                            <div>
                                <Text type="secondary">Colors</Text>
                            </div>
                        </div>

                        <div>
                            <SelectColorsTheme {...props} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DraggableDialog;