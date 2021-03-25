import styled from "styled-components";
import React from "react";
import {CounterContext} from "../../../components/Theme/ThemeDoc";
import { makeStyles } from '@material-ui/core/styles';
import Idea from '../icons/idea.png'

export const checkIconStyle = makeStyles({
    root: {
        color: "#1890ff",
    },
});

export const LessonSideBarTitle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const H1 = styled.h1`
      font-size: 1.5rem;
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
      margin-top: 1rem;
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
      font-size: 15px;
      font-family: system-ui;
      color: ${(PageColor ? PageColor : "#304455")};
    `;
    return <P>{children}</P>
}

export const RadioTypography = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const P = styled.p`
      word-spacing: 0.05em;
      font-size: 14px;
      font-family: system-ui;
      cursor: pointer;
      color: ${(PageColor ? PageColor : "#304455")};
    `;
    return <P>{children}</P>
}

export const StepsTitle = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const StepsTitle = styled.p`
      line-height: 1.4em;
      margin: 0em 0 -1.2em;
      padding-bottom: 1.2em;
      font-size: 15px;
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

export const LessonContainers = styled.div`
      margin: 2rem 0 2rem 0;
`;

export const Strong  = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const AlertBg = SideBarThemeValue && SideBarThemeValue.AlertBackground;
    const PageColor = SideBarThemeValue && SideBarThemeValue.PageContentColor;

    const B = styled.b`
      background: ${(AlertBg ? AlertBg : "#e6f7ff")};
      color: ${(PageColor ? PageColor : "#304455")};
      letter-spacing: -0.3px;
    `;
    return <B>{children}</B>
}

export const CustomBlockContainer  = ({children}) => {
    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const AlertBg = SideBarThemeValue && SideBarThemeValue.AlertBackground;

    const CustomBlockContainer = styled.div`
      border-left: ${(AlertBg ? `5px solid ${AlertBg}` : "5px solid #6dbeff")};
      padding: .1rem 2rem;
      position: relative;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      margin: 1rem 0 2.5rem 0;
      
      &:before {
        content: url(${Idea});
        border: ${(AlertBg ? `4px solid ${AlertBg}` : "4px solid #ffffff")};
        width: 25px;
        height: 25px;
        left: -15px;
        position: absolute;
        top: 20px;
        color: #fff;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-weight: 700;
        font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
        font-size: 14px;
      }
    `;

    return <CustomBlockContainer>{children}</CustomBlockContainer>
}

