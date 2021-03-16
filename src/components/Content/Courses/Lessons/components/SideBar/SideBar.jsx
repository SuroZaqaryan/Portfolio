import React, {useContext, useEffect, useState} from 'react';
import {CounterContext} from "../Theme/ThemeDoc";
import SideBarMenu from "./SideBarMenu";
import '../../css/Sidebar.css'
import Blur from "./styles/SideBarBlurSettings.module.css"
import SideBarWrapper from "./SideBar_Components/SideBar_Wrapper";
import connect, {SideBarContext} from './SideBarContext';
import {slide as Menu} from 'react-burger-menu'
import SideBarMenuIcon from "./icons/SideBarIcons/SideBarMenu.png"

function SideBar(props) {
    const {someValue} = useContext(SideBarContext);
    const {SideBarValue, SideBarWallpaperValue} = React.useContext(CounterContext);

    const [SideBarThemeValue] = SideBarValue;
    const [SideBarBackgroundValue] = SideBarWallpaperValue;

    const [sideBarOpen, setSideBarOpen] = useState(() => window.innerWidth > 765);
    const [SideBarButtonContainer, setSideBarButtonContainer] = useState(() => window.innerWidth < 765);

    useEffect(() => {
        window.addEventListener("resize", resize);
    }, []); // Only initialize listener on initial render

    const resize = () => {
        if (window.innerWidth < 765) {
            setSideBarOpen(false)
            setSideBarButtonContainer(true)
        } else {
            setSideBarOpen(true)
            setSideBarButtonContainer(false)
        }
    }

    const showSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
        <>
            {
                SideBarButtonContainer ? <div className={"showSideBarButtonContainer"}>
                    <img className={"showSideBarButton"} onClick={() => showSideBar()} src={SideBarMenuIcon}
                         alt={"Open"}/>
                </div> : null
            }

            <Menu isOpen={sideBarOpen}>
                <div className={"headline_sidebar_wrapper"}>
                    <article className={`${Blur.glass} ${Blur.up}`}>
                        <nav id="sidebar" className="sidebar-wrapper modal">
                            <div className={"sidebar_background"}>
                                <div className={"background_theme_image"}
                                     style={{background: SideBarBackgroundValue && SideBarBackgroundValue.SideBarWallpaper}}>
                                    <div
                                        style={{background: SideBarBackgroundValue && SideBarBackgroundValue.background ? SideBarBackgroundValue.background : "linear-gradient(343deg, rgb(19 192 54 / 75%) 0%, rgb(64 169 255 / 72%) 100%)"}}>
                                        <div style={{
                                            background: SideBarThemeValue && SideBarThemeValue.SideBar,
                                            backdropFilter: `blur(${someValue}px)`
                                        }}
                                             className={`${Blur.SideBar_Page_Content} ${Blur.SideBarContainer}`}>
                                            <SideBarWrapper {...props} SideBarWallpaperTheme={SideBarBackgroundValue}
                                                            SideBarTheme={SideBarThemeValue}/>
                                            <div className="sidebar-menu">
                                                <SideBarMenu SideBarTheme={SideBarThemeValue}
                                                             SideBarWallpaperTheme={SideBarBackgroundValue}
                                                             path={props.match.path}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </article>
                </div>
            </Menu>
        </>
    );
}

//connect sidebar to the context
export default connect(SideBar)