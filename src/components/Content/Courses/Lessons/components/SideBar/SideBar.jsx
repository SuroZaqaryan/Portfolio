import React, {useContext, useState} from 'react';
import {CounterContext} from "../Theme/ThemeDoc";
import SideBarMenu from "./SideBarMenu";
import '../../css/Sidebar.css'
import Blur from "./styles/SideBarBlurSettings.module.css"
import SideBarWrapper from "./SideBar_Components/SideBar_Wrapper";
import {BlurContext} from "./SideBar_Components/SideBar_BlueRange/SideBarBlurChange";
import connect, { SideBarContext } from './SideBarContext';

function SideBar(props) {
    const [enabled, setEnabled] = useState(true)
    const {someValue} = useContext(SideBarContext);
    console.log('context value in sidebar',someValue)
    const {SideBarValue, SideBarWallpaperValue} = React.useContext(CounterContext);

    const [SideBarTheme] = SideBarValue;
    const [SideBarBackground] = SideBarWallpaperValue;

    return (
        <div className={"headline_sidebar_wrapper"}>
            <article className={`${Blur.glass} ${Blur.up}`}>
                <nav id="sidebar" className="sidebar-wrapper modal">
                    <p>{}</p>
                    <div style={{backgroundImage: `url(${SideBarBackground})`}}>
                        <div style={{background: SideBarTheme, backdropFilter: "blur(60px)"}}
                             className={`${Blur.SideBar_Page_Content} ${Blur.SideBarContainer}`}>
                            <SideBarWrapper {...props} />
                            <div className="sidebar-menu">
                                <SideBarMenu path={props.match.path}/>
                            </div>
                        </div>
                    </div>
                </nav>
            </article>
        </div>
    );
}
//connect sidebar to the context
export default connect(SideBar)