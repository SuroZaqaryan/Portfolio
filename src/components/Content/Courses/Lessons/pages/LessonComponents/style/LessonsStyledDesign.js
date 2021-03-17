import styled from "styled-components";
import React from "react";
import {CounterContext} from "../../../components/Theme/ThemeDoc";

export const LessonSideBarTitle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const H1 = styled.h1`
      font-size: 1.7rem;
      font-weight: 500;
      color: ${(PageColor ? PageColor : "#2c3e50")};
      font-family: 'Roboto';
      margin-top: 1rem;
    `;

    return <H1>{children}</H1>
}

export const LessonTitle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const H2 = styled.h2`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 22px;
      font-weight: 500;
      color: ${(PageColor ? PageColor : "#273849")};
      font-family: 'Roboto';
      border-bottom: 1px solid #ddd;
      margin: 0px 0 0.8em;
      padding-bottom: 0.7em;
    `;
    return <H2>{children}</H2>
}

export const LessonTypography = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const P = styled.p`
      line-height: 1.6em;
      margin: 0.6em 0 -1.2em;
      padding-bottom: 1.2em;
      word-spacing: 0.05em;
      font-size: 14px;
      font-family: system-ui;
      color: ${(PageColor ? PageColor : "#304455")};
    `;
    return <P>{children}</P>
}

export const StepsTitle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const StepsTitle = styled.p`
      line-height: 1.6em;
      margin: 0em 0 -1.2em;
      padding-bottom: 1.2em;
      font-size: 14px;
      font-weight: 500;
      font-family: revert;
      color: ${(PageColor ? PageColor : "#304455")};
    `;
    return <StepsTitle>{children}</StepsTitle>
}

export const StepsDescription = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const StepsDescription = styled.p`
      line-height: 1.6em;
      margin: 0em 0 -1.2em;
      padding-bottom: 1.2em;
      word-spacing: 0.05em;
      font-size: 14px;
      font-family: system-ui;
      color: ${(PageColor ? PageColor : "#304455")};
    `;
    return <StepsDescription>{children}</StepsDescription>
}

export const AlertStyle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const AlertBg = SideBarThemeValue && SideBarThemeValue.AlertBackground;

    const AlertStyle = styled.p`
      background: ${(AlertBg ? AlertBg : "#e6fff4")};
      color: ${(AlertBg ? "#e3e3e3" : "#304455")};
    `;
    return <AlertStyle>{children}</AlertStyle>
}