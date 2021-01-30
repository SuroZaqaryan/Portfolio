import React from 'react';
import {CounterContext} from "../Theme/ThemeDoc";
import SideBarMenu from "./SideBarMenu";
import '../../css/Sidebar.css'
import Blur from "./styles/SideBarBlurSettings.module.css"
import Back from "./icons/icons8-back.png"
import {NavLink} from "react-router-dom";

export default function SideBar(props) {

    const {SideBarValue, PageContentValue, TextColorValue} = React.useContext(CounterContext);

    const [SideBarTheme, SetSideBarTheme] = SideBarValue;
    const [PageContentTheme, SetPageContentTheme] = PageContentValue;
    const [TextColor, SetTextColor] = TextColorValue;

    const AssignDefaultTheme = (SideBarKey, PageContentKey) => {
        SetSideBarTheme(localStorage.removeItem(SideBarKey));
        SetPageContentTheme(localStorage.removeItem(PageContentKey));
        SetTextColor(localStorage.removeItem(TextColorValue));
    }

    return (
        <div className={"wrapped_comp"}>
            <article className={`${Blur.glass} ${Blur.up}`}>
                <div className="wrappers">
                    <nav id="sidebar" className="sidebar-wrapper modal">
                        <div style={{background: SideBarTheme}}
                             className={`${Blur.SideBar_Page_Content} ${Blur.SideBarContainer}`}>
                            <div className="sidebar-brand">
                                <div className={"SideBar_Back_Theme_Container"}>
                                    <NavLink className={"Back_To_Content"} to={"/content"}>
                                        <div className="sidebar_back_to_home">
                                            <div className={"sidebar_backIcon_container"}>
                                                <img src={Back} alt=""/>
                                            </div>

                                            <div>
                                                <p>Back</p>
                                            </div>
                                        </div>
                                    </NavLink>

                                    <div onClick={() => AssignDefaultTheme("SideBarKey", "PageContentKey")} className={"SideBar_Theme_Default"}>
                                        <p>Theme Default</p>
                                    </div>
                                </div>
                                <div className="sidebar-header">
                                    <div className="user-pic">
                                        <img
                                            className="img-responsive img-rounded"
                                            src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/25552320_10155560223259678_8307290088032102953_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=1ksbXQO_NRoAX_6_07Z&_nc_ht=scontent.fevn1-4.fna&oh=8706cdd1415ef3c17b9b4b7c9d854438&oe=6039AA0A"
                                            alt="User picture"
                                        />
                                    </div>
                                    <div className="user-info">
                                <span className="sidebar_user_name">
                                    <strong>Jhon Smith</strong>
                                </span>
                                        <span className="user-status">
                                    <i className="fa fa-circle"></i>
                                    <span>Online</span>
                                </span>
                                    </div>
                                </div>
                                <div className="sidebar-brand-container">
                                    <div>
                                        {props.list}
                                    </div>

                                    <div>
                                        <span>Themes</span>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-menu">
                                <SideBarMenu path={props.match.path}/>
                            </div>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
}