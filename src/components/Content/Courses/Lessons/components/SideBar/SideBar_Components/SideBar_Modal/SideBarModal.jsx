import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Modal from "antd/es/modal/Modal";
import "./style.css";
import SideBarBlurChange from "../SideBar_BlueRange/SideBarBlurChange";
import {Button} from "antd";
import {CounterContext} from '../../../Theme/ThemeDoc';
import {ThemeIcon} from "./ThemeIcon";
import { Typography } from 'antd';
import SelectGradientTheme from "../../../Theme/SelectThemePictures/SelectGradientTheme";
import Paragraph from "antd/es/typography/Paragraph";
import SelectColorsTheme from "../../../Theme/SelectThemePictures/SelectColorsTheme";
import SideBarWallpaperContainer from "../../../Theme/SideBarWallpaper/SideBarWallpaperContainer";

const { Text } = Typography;
const DraggableDialog = (props) => {
    const [visible, setVisible] = useState(false);

    const {SideBarValue,} = React.useContext(CounterContext);

    const [SideBarTheme,] = SideBarValue;
    const ItemColor = SideBarTheme && SideBarTheme.ItemColor;

    const handleOk = () => {
        setVisible(false)
    }

    return (
        <>
            <div style={{display: "flex", alignItems: "center", width: "100%",}}>
                <div style={{display: "flex"}}>
                    <ThemeIcon ItemColor={ItemColor}/>
                </div>

                <div style={{margin: '2px 0px 0px 10px'}}>
                    <span style={{color: ItemColor, fontFamily: "revert", fontWeight: "500"}}
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
                width={"auto"}
                style={{maxWidth: "100%"}}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => handleOk()}
                        style={{background: "#dadadafc", borderColor: "#c7c7c7", color: "#2d2d2d"}}
                    >
                        <span style={{fontSize: '13px'}}>Apply</span>
                    </Button>
                ]}
            >
                <div className={"SideBarModal_Wrapper"}>

                    <div>
                        <Text strong>Colors</Text>
                        <Paragraph style={{ color: "#565656"}}>
                            Customize the look of your workspace. Feeling adventurous?
                        </Paragraph>
                    </div>
                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div className={"SideBarModal_Appearance"}>
                        <div className={"SideBarModal_Child_Appearance"}>
                            <Text strong>Appearance:</Text>
                        </div>

                        <div style={{marginLeft: "5px"}}>
                            <SideBarWallpaperContainer {...props} />
                        </div>
                    </div>

                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div>
                        <div className={"SideBarModal_Child_Color"}>
                            <p>Blur Change</p>
                        </div>
                        <div>
                            <SideBarBlurChange {...props} />
                        </div>
                    </div>

                    <div className={"SideBarModal_Accept_Color_Gradient"}>
                        <div style={{marginTop: "20px"}}>
                            <Text type="secondary" style={{
                                fontSize: '13px',
                                color: '#1d1c1db3',
                                fontFamily: 'Roboto',}}>Gradients</Text>
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
                                <Text type="secondary" style={{
                                    fontSize: '13px',
                                    color: '#1d1c1db3',
                                    fontFamily: 'Roboto',}}>Colors</Text>
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