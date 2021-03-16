import React from "react";
import styled from "styled-components";
import '../../css/Sidebar.css'
import RoutesPage from "../../pages/Routes";

const PageContentDiv = styled.div`
  height: 100vh;
  //overflow-x: hidden;
`;

export default function PageContent(props) {

    const {SideBarTheme} = props;
    const PageBackground = SideBarTheme && SideBarTheme.PageContent;

    return(
        <PageContentDiv className="page-content">
            <div style={{background: PageBackground}} className={"headline-page-container"}>
                <div className="page-container">
                    {/*<h2>Pro Sidebar</h2>*/}
                    {/*<hr/>*/}
                    <div className="tabs">
                        <RoutesPage {...props} path={props.match} />
                    </div>
                </div>
            </div>
        </PageContentDiv>
    );
}