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
    createData("firstName", "John"),
    createData("lastName", "Doe"),
    createData("age", "50"),
    createData("eyeColor", "blue")
];


const codeString = `var car = {type:"Fiat", model:"500", color:"white"};`;

const thirdLink = `var price1 = 5;
var price2 = 6;
var total = price1 + price2;`;

function Questions() {
    const [QuestionTitle,] = useState('In reference to an object, color, height, weight and name are all examples of:')

    const [task,] = useState([
        { value: 'option_1', question: 'Nouns' },
        { value: 'option_2', question: 'Methods' },
        { value: 'correctly', question: 'Properties' },
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value} />
}

function StepsChild() {
    const [stepInfo,] = useState([
        {
            description: "In programming, just like in algebra, we use variables (like price1) to hold values.",
        },
        {
            description: "In programming, just like in algebra, we use variables in expressions (total = price1 + price2).",
        },
        {
            description: "From the example above, you can calculate the total to be 11.",
        },
    ])

    return <StepContainer stepInfo={stepInfo} />
}

const Introductions = RadioButtonsHoc(Questions);

export default function Objects(props) {

    const classes = useStyles();
    const { SideBarThemeValue, AlertStyleBG } = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Objects<span className={"LessonEmoji"}>🧱</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>Real Life Objects, Properties, and Methods</LessonTitle>

            <LessonContainers>
                <LessonTypography>In real life, a car is an object.</LessonTypography>
                <LessonTypography>A car has properties like weight and color, and methods like start and stop:</LessonTypography>

                <Grid container spacing={3} style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    <Grid item xs={6}>
                        <img style={{ maxWidth: '100%' }} src={Car} alt="Car" />
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}><Strong>Properties</Strong></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.name = Fiat</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.model = 500</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.weight = 850kg</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.color = white</LessonTypography></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}><Strong>Methods</Strong></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.start()</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.drive()</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.brake()</LessonTypography></Paper>
                        <Paper className={classes.paper}><LessonTypography>car.stop()</LessonTypography></Paper>
                    </Grid>
                </Grid>

                <LessonTypography>All cars have the same <Strong>properties</Strong>, but the property <Strong>values</Strong> differ from car to car.</LessonTypography>
                <LessonTypography>All cars have the same <Strong>methods</Strong>, but the methods are performed <Strong>at different times.</Strong></LessonTypography>

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
                            <TableCell>Property</TableCell>
                            <TableCell align="left">Property Value</TableCell>
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

            <Introductions />
        </>
    );
}