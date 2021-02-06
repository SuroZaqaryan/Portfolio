import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Modal from "antd/es/modal/Modal";
import "./style.css";
import SideBarBlurChange from "../SideBar_BlueRange/SideBarBlurChange";
import SideBarBlurChangeContainer from '../SideBar_BlueRange/SideBarBlurChange';

const DraggableDialog = (props) => {
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(25);

    return (
        <>
            <span onClick={() => setVisible(true)}>
                Themes
            </span>
            <Modal
                title="Customize the theme to your liking"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={700}
            >
                <div className={"SideBarModal_Wrapper"}>
                    <div className={"SideBarModal_Appearance"}>
                        <div className={"SideBarModal_Child_Appearance"}>
                            <p>Appearance:</p>
                        </div>

                        <div>
                            {props.SideBarWallpaperList}
                        </div>
                    </div>

                    <div className={"SideBarModal_Line_Container"}>
                        <hr className={"SideBarModal_Line"}/>
                    </div>

                    <div className={"SideBarModal_Accept_Color"}>
                        <div className={"SideBarModal_Child_Color"}>
                            <p>Accent color:</p>
                            <p>{count}</p>
                        </div>

                        <div>
                            {props.list}
                        </div>
                    </div>

                    <div>
                        <SideBarBlurChange {...props} count={count} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DraggableDialog;