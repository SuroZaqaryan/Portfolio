import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { Nav, Navs } from "./components/Nav";
import SidebarItems from "./pages/SidebarItems";

class Test extends Component {
    render() {
        const { path } = this.props.match;

        const routes = [
            {
                path: `${path}`,
                exact: true,
                component: () => <h2>Home</h2>
            },
            {
                path: `${path}/comments`,
                component: () => <Nav />
            },
            {
                path: `${path}/contact`,
                component: () => <h2>Shoelaces</h2>
            }
        ];

        return (
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <a href="#">pro sidebar</a>
                            <div id="close-sidebar">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        <div className="sidebar-header">
                            <div className="user-pic">
                                <img className="img-responsive img-rounded"
                                    src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                                    alt="User picture" />
                            </div>
                            <div className="user-info">
                                <span className="user-name">Jhon <strong>Smith</strong></span>
                                <span className="user-status">
                                    <i className="fa fa-circle"></i>
                                    <span>Online</span>
                                </span>
                            </div>
                        </div>

                        <div className="sidebar-menu">
                            <ul>
                                {SidebarItems.map((item, index) => {
                                    return (
                                        <>
                                            {item.names && (
                                                <li className="header-menu">
                                                    <span>{item.names}</span>
                                                </li>
                                            )}

                                            {item.name && (
                                                <li>
                                                <i className="fa fa-folder"></i>
                                                <Link to={`${path}` + item.route} className="link">{item.name}</Link>
                                            </li>
                                            )}
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="page-content">
                    <div className="page-container">
                        <h2>Pro Sidebar</h2>
                        <hr />
                        <div className="tabs">
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
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Test;
