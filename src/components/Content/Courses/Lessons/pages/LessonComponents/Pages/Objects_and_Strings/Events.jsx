import React, { useState } from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Alert } from "@material-ui/lab";
import {
    AlertStyle, CustomBlockContainer, LessonContainers, Strong,
    LessonSideBarTitle,
    LessonTitle,
    LessonTypography,
} from "../../style/LessonsStyledDesign";
import { RadioButtonsHoc } from "../../../../../../../Hocs/TasksHoc/TasksHoc";
import TaskWrapper from "../../TaskComponent/TaskBlock";
import { Steps } from 'antd';
import StepContainer, { StepWrapper } from "../../StepsLogic/StepsContainer";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import Car from '../../icons/car.png'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const { Step } = Steps;
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        background: "#ffffff00",
        color: "#000000b5",
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        boxShadow: 'none',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    table: {
        minWidth: 650,
    },
    tablePosition: {
        marginBottom: '3rem',
        boxShadow: 'none',
    }
}));


function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData("onchange", "An HTML element has been changed"),
    createData("onclick", "The user clicks an HTML element"),
    createData("onmouseover", "The user moves the mouse over an HTML element"),
    createData("onmouseout", "The user moves the mouse away from an HTML element"),
    createData("onkeydown", "The user pushes a keyboard key"),
    createData("onload", "The browser has finished loading the page"),
];


const codeString = `<element event='some JavaScript'>`

const secondLink = `<element event="some JavaScript">`

const thirdLink = `<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>`

const forLink = `<button onclick="this.innerHTML = Date()">The time is?</button>`

function Questions() {
    const [QuestionTitle,] = useState('The <button> element should do something when someone clicks on it. Try to fix it!')
    const [taskCode,] = useState(`<button   ="alert('Hello')">Click me.</button>`)

    const [task,] = useState([
        { value: 'option_1', question: 'hover' },
        { value: 'correctly', question: 'onclick' },
        { value: 'option_2', question: 'onMouseOver' },
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} taskCode={taskCode} value={task.value} />
}const Introductions = RadioButtonsHoc(Questions);

function StepsChild() {
    const [stepInfo,] = useState([
        {
            description: "An HTML web page has finished loading",
        },
        {
            description: "An HTML input field was changed",
        },
        {
            description: "An HTML button was clicked",
        },
    ])
    return <StepContainer stepInfo={stepInfo}/>
}

function SecondStepsChild() {
    const [stepInfo,] = useState([
        {description: "Things that should be done every time a page loads",},
        {description: "Things that should be done when the page is closed",},
        {description: "Action that should be performed when a user clicks a button"},
        {description: "Content that should be verified when a user inputs data"},
        {description: "And more ..."},
    ])
    return <StepContainer stepInfo={stepInfo}/>
}

function ThirdStepsChild() {
    const [stepInfo,] = useState([
        {description: "HTML event attributes can execute JavaScript code directly"},
        {description: "HTML event attributes can call JavaScript functions"},
        {description: "You can assign your own event handler functions to HTML elements"},
        {description: "You can prevent events from being sent or being handled"},
        {description: "And more ..."},
    ])
    return <StepContainer stepInfo={stepInfo}/>
}

export default function Events(props) {

    const classes = useStyles();
    const { SideBarThemeValue, AlertStyleBG } = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Events<span className={"LessonEmoji"}>✨</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>HTML Events</LessonTitle>

            <LessonContainers>
                <StepsChild />

                <LessonTypography>Often, when events happen, you may want to do something.</LessonTypography>
                <LessonTypography>JavaScript lets you execute code when events are detected.</LessonTypography>
                <LessonTypography>HTML allows event handler attributes, <Strong>with JavaScript code,</Strong> to be added to HTML elements.</LessonTypography>

                <LessonTypography>With single quotes:</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{ paddingLeft: 0 }}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                    {codeString}
                </SyntaxHighlighter>

                <LessonTypography>With double quotes:</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{ paddingLeft: 0 }}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                    {secondLink}
                </SyntaxHighlighter>

                <LessonTypography>In the following example, an onclick attribute (with code), is added to a button element:</LessonTypography>

                <LessonTitle>Example</LessonTitle>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{ paddingLeft: 0 }}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                    {thirdLink}
                </SyntaxHighlighter>

                <LessonTypography>In the example above, the JavaScript code changes the content of the element with id="demo".</LessonTypography>
                <LessonTypography>In the next example, the code changes the content of its own element (using this.innerHTML):</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{ paddingLeft: 0 }}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                    {forLink}
                </SyntaxHighlighter>

                <Alert style={AlertStyleBG} severity="info"><AlertStyle>JavaScript code is often several lines long.
                It is more common to see event attributes calling functions:</AlertStyle></Alert>

                <LessonContainers>
                    <LessonTypography>All cars have the same <Strong>methods</Strong>, but the methods are performed <Strong>at different times.</Strong></LessonTypography>
                </LessonContainers>

                <LessonTitle>JavaScript Objects</LessonTitle>

                <LessonTypography>You have already learned that JavaScript variables are containers for data values.</LessonTypography>
                <LessonTypography>This code assigns a <Strong>simple value</Strong> (Fiat) to a <Strong>variable</Strong> named car:</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{ paddingLeft: 0 }}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{ style: { fontFamily: "inherit" } }}
                >
                    var car = "Fiat";
                </SyntaxHighlighter>
            </LessonContainers>

            <LessonContainers>
                <LessonTypography>Objects are variables too. But objects can contain many values.</LessonTypography>
                <LessonTypography>This code assigns <Strong>many values</Strong> (Fiat, 500, white) to a <Strong>variable</Strong> named car:</LessonTypography>
            </LessonContainers>

            <SyntaxHighlighter
                language="javascript"
                customStyle={{ paddingLeft: 0 }}
                className={"SyntaxHighlighter"}
                style={PageContentSyntax}
                wrapLines={true}
                showLineNumbers={true}
                codeTagProps={{ style: { fontFamily: "inherit" } }}
            >
                {codeString}
            </SyntaxHighlighter>

            <LessonContainers>
                <LessonTypography>The values are written as <Strong>name:value</Strong> pairs (name and value separated by a colon).</LessonTypography>
                <Alert style={AlertStyleBG} severity="info"><AlertStyle>JavaScript objects are containers for <Strong>named values</Strong> called properties or methods.</AlertStyle> </Alert>
            </LessonContainers>

            <TableContainer className={classes.tablePosition} component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <LessonTitle>What can JavaScript Do?</LessonTitle>

            <LessonTypography>Event handlers can be used to handle and verify user input, user actions, and browser actions:</LessonTypography>

            <SecondStepsChild />

            <LessonTypography>Many different methods can be used to let JavaScript work with events:</LessonTypography>

            <ThirdStepsChild />

            <LessonContainers>
                <Alert style={AlertStyleBG} severity="info"><AlertStyle>You will learn a lot more about events and event handlers in the HTML DOM chapters.</AlertStyle> </Alert>
            </LessonContainers>

            <Introductions />
        </>
    );
}