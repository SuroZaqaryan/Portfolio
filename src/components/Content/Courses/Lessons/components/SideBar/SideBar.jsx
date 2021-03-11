import React, {useContext} from 'react';
import {CounterContext} from "../Theme/ThemeDoc";
import SideBarMenu from "./SideBarMenu";
import '../../css/Sidebar.css'
import Blur from "./styles/SideBarBlurSettings.module.css"
import SideBarWrapper from "./SideBar_Components/SideBar_Wrapper";
import connect, {SideBarContext} from './SideBarContext';

function SideBar(props) {
    const {someValue} = useContext(SideBarContext);
    const {SideBarValue, SideBarWallpaperValue} = React.useContext(CounterContext);

    const [SideBarThemeValue] = SideBarValue;
    const [SideBarBackgroundValue] = SideBarWallpaperValue;

    return (
        <div className={"headline_sidebar_wrapper"}>
            <article className={`${Blur.glass} ${Blur.up}`}>
                <nav id="sidebar" className="sidebar-wrapper modal">
                    <div className={"sidebar_background"}>
                        <div className={"background_theme_image"}
                             style={{background: SideBarBackgroundValue && SideBarBackgroundValue.SideBarWallpaper}}>
                            <div style={{background: SideBarBackgroundValue && SideBarBackgroundValue.background}}>
                                <div style={{
                                    background: SideBarThemeValue && SideBarThemeValue.SideBar,
                                    backdropFilter: `blur(${someValue}px)`
                                }}
                                     className={`${Blur.SideBar_Page_Content} ${Blur.SideBarContainer}`}>
                                    <SideBarWrapper {...props} SideBarWallpaperTheme={SideBarBackgroundValue}
                                                    SideBarTheme={SideBarThemeValue}/>
                                    <div className="sidebar-menu">
                                        <SideBarMenu SideBarTheme={SideBarThemeValue} SideBarWallpaperTheme={SideBarBackgroundValue} path={props.match.path}/>
                                    </div>
                                </div>
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