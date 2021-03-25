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
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
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


function createData(property, value, description) {
    return { property, value, description };
}

const rows = [
    createData("\\'", " ' ", "Single quote"),
    createData("\\ \"", " \" ", "Double quote"),
    createData("\\\\", "\\", "Backslash"),
];


const codeString = `var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';`;

const thirdLink = `var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes`;

const fiveLink = `var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;`;

function Questions() {
    const [QuestionTitle,] = useState("Use the length property to alert the length of txt.");
    const [taskCode,] = useState(`var txt = "Hello World!";
var x = *** ;
alert(x);`)
    const [task,] = useState([
        { value: 'option_1', question: 'txt.line' },
        { value: 'correctly', question: 'txt.length' },
        { value: 'option_2', question: 'txt.width' },
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} taskCode={taskCode} value={task.value} />
}

const Introductions = RadioButtonsHoc(Questions);

export default function Strings(props) {

    const classes = useStyles();
    const { SideBarThemeValue, AlertStyleBG } = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Strings<span className={"LessonEmoji"}>🔠</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>JavaScript Strings</LessonTitle>

            <LessonContainers>
                <LessonTypography>A JavaScript string is zero or more characters written inside quotes.</LessonTypography>
                
                <LessonContainers>
                    <LessonTitle>Example</LessonTitle>
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
                    var x = "John Doe";
                </SyntaxHighlighter>
            </LessonContainers>

            <LessonContainers>
                <LessonTypography>You can use single or double quotes:</LessonTypography>
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
                {thirdLink}
            </SyntaxHighlighter>

            <LessonContainers>
                <LessonTypography>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</LessonTypography>
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
                <LessonTitle>String Length</LessonTitle>
                <LessonTypography>To find the length of a string, use the built-in length property:</LessonTypography>
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
                {fiveLink}
            </SyntaxHighlighter>

            <LessonContainers>
                <LessonTitle>Escape Character</LessonTitle>
                <LessonTypography>Because strings must be written within quotes, JavaScript will misunderstand this string:</LessonTypography>
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
                var x = "We are the so-called "Vikings" from the north.";
            </SyntaxHighlighter>

            <LessonContainers>
                <LessonTypography>The string will be chopped to "We are the so-called ".</LessonTypography>
                <LessonTypography>The solution to avoid this problem, is to use the <Strong>backslash escape character.</Strong></LessonTypography>
                <LessonTypography>The backslash (\) escape character turns special characters into string characters:</LessonTypography>
            </LessonContainers>

            <TableContainer className={classes.tablePosition} component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.property}</TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <LessonContainers>
                <Alert style={AlertStyleBG} severity="info"><AlertStyle>The 6 escape characters above were originally designed to control
                typewriters, teletypes, and fax machines. They do not make any sense in HTML.</AlertStyle></Alert>
            </LessonContainers>

            <Introductions />
        </>
    );
}