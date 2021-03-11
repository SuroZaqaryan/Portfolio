import React from "react";
import {Route, Switch} from "react-router-dom";
import '../css/Sidebar.css'
import Introduction from "./LessonComponents/Overview/Introduction";

function RoutesPage(props) {

    const {path} = props.path;

    const routes = [
        {
            path: `${path}`,
            exact: true,
            component: () => <h2>Home</h2>
        },
        {
            path: `${path}/Introduction`,
            component: () => <Introduction />
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
