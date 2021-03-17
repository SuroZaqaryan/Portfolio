import React from "react";
import {Route, Switch} from "react-router-dom";
import '../../css/Sidebar.css'
import Introduction from "../LessonComponents/Introduction";
import styled from "styled-components";
import {CounterContext} from "../../components/Theme/ThemeDoc";
import CreatingFirstJS from "../LessonComponents/CreatingFirstJS";

function RoutesPage(props) {

    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const AlertBg = SideBarThemeValue && SideBarThemeValue.AlertBackground;

    const LessonContainers = styled.div`
      margin: 2rem 0 2rem 0;
    `;

    const LessonMarkDown = styled.b`
      background: ${(AlertBg ? AlertBg : "#e6f7ff")};
      letter-spacing: -0.3px;
    `;

    const CustomBlockContainer = {
        borderLeft: AlertBg ? `5px solid ${AlertBg}` : "5px solid #6dbeff",
    }
    const AlertStyleBG = {
        background: AlertBg ? AlertBg : "#e6fff4",
    }

    const {path} = props.path;

    const routes = [
        {
            path: `${path}/Introduction`,
            component: () => <Introduction LessonContainers={LessonContainers} SideBarThemeValue={SideBarThemeValue}
                                           AlertStyleBG={AlertStyleBG}
            LessonMarkDown={LessonMarkDown}
            CustomBlockContainer={CustomBlockContainer}/>
        },
        {
            path: `${path}/Creating Your First Javascript`,
            exact: true,
            component: () => <CreatingFirstJS LessonContainers={LessonContainers}
            SideBarThemeValue={SideBarThemeValue}
                                              AlertStyleBG={AlertStyleBG}
            LessonMarkDown={LessonMarkDown}
            CustomBlockContainer={CustomBlockContainer}/>
        },
        {
            path: `${path}/Guardian`,
            component: () => <h2>Shoelaces</h2>
        }
    ];

    return (
        <>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        </>
    );
}

export default RoutesPage;
