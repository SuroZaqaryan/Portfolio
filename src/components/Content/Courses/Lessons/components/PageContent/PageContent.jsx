import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {CounterContext} from "../Theme/ThemeDoc";
import '../../css/Sidebar.css'
import RoutesPage from "../../pages/Routes";

const PageContentDiv = styled.div`
  //background: #f3f3f3;
  //background: linear-gradient(180deg,rgba(65,116,130,1) 0%, #353a4f 80%);
  height: 100vh;
  overflow-x: hidden;
`;

export default function PageContent(props) {

    const { PageContentValue } = React.useContext(CounterContext);
    const [PageContentTheme, SetPageContentTheme] = PageContentValue;

    return(
        <PageContentDiv className="page-content">
            <div style={{background: PageContentTheme}} className={"headline-page-container"}>
                <div className="page-container">
                    <h2>Pro Sidebar</h2>
                    <hr/>
                    <div className="tabs">
                        <RoutesPage path={props.match} />
                    </div>
                </div>
            </div>
        </PageContentDiv>
    );
}