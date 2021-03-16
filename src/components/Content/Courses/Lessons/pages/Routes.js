import React from "react";
import {Route, Switch} from "react-router-dom";
import '../css/Sidebar.css'
import Introduction from "./LessonComponents/Overview/Introduction";
import styled from "styled-components";
import {CounterContext} from "../components/Theme/ThemeDoc";

function RoutesPage(props) {

    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;

    const LessonContainers = styled.div`
      margin: 2rem 0 2rem 0;
    `;

    const LessonSideBarTitle = styled.h1`
      font-size: 1.8rem;
      font-weight: 500;
      color: ${(SideBarThemeValue.PageContentColor ? SideBarThemeValue.PageContentColor : "#2c3e50")};
      font-family: 'Roboto';
      margin-top: 1rem;
    `;

    const LessonTitle = styled.h2`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 22px;
      font-weight: 500;
      color: #273849;
      font-family: 'Roboto';
      border-bottom: 1px solid #ddd;
      margin: 0px 0 0.8em;
      padding-bottom: 0.7em;
    `;

    const LessonTypography = styled.p`
      line-height: 1.6em;
      margin: 0.6em 0 -1.2em;
      padding-bottom: 1.2em;
      word-spacing: 0.05em;
      font-size: 15px;
      font-family: system-ui;
      color: ${(SideBarThemeValue.PageContentColor ? SideBarThemeValue.PageContentColor : "#304455")};
    `;

    const LessonMarkDown = styled.b`
      background: #e6f7ff;
      letter-spacing: -0.3px;
    `;

    const {path} = props.path;

    const routes = [
        {
            path: `${path}`,
            exact: true,
            component: () => <Introduction LessonContainers={LessonContainers} SideBarThemeValue={SideBarThemeValue}
            LessonTypography={LessonTypography} LessonSideBarTitle={LessonSideBarTitle}
            LessonTitle={LessonTitle} LessonMarkDown={LessonMarkDown}/>
        },
        {
            path: `${path}/Introduction`,
            component: () => <Introduction LessonContainers={LessonContainers} SideBarThemeValue={SideBarThemeValue}
           LessonTypography={LessonTypography} LessonSideBarTitle={LessonSideBarTitle}
           LessonTitle={LessonTitle} LessonMarkDown={LessonMarkDown}/>
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
