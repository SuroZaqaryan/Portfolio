import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Alert} from "@material-ui/lab";
import {
    AlertStyle, CustomBlockContainer, LessonContainers, Strong,
    LessonSideBarTitle,
    LessonTitle,
    LessonTypography,
} from "../../style/LessonsStyledDesign";
import {RadioButtonsHoc} from "../../../../../../../Hocs/TasksHoc/TasksHoc";
import TaskWrapper from "../../TaskComponent/TaskBlock";
import StepContainer from "../../StepsLogic/StepsContainer";

const codeString = `var x = 5;
var y = 6;
var z = x + y;`;

const thirdLink = `var price1 = 5;
var price2 = 6;
var total = price1 + price2;`;

function Questions() {
    const [QuestionTitle,] = useState('Which of these characters can we use to start a variable?')

    const [task,] = useState([
        {value: 'option_1', question: 'Numbers'},
        {value: 'correctly', question: 'Letters'},
        {value: 'option_2', question: 'Mathematical Operators'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value}/>
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

    return <StepContainer stepInfo={stepInfo}/>
}

const Introductions = RadioButtonsHoc(Questions);

export default function ES6_REST_SPREAD(props) {

    const {SideBarThemeValue, AlertStyleBG} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>ES6 Rest & Spread <span className={"LessonEmoji"}>🔥</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>JavaScript variables are containers for storing data values.</LessonTitle>

            <LessonContainers>
                <LessonTypography>
                    In this example, <Strong>x,</Strong> <Strong>y,</Strong> and <Strong>z,</Strong> are variables, declared with the var keyword:
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {codeString}
                </SyntaxHighlighter>
            </LessonContainers>

            <LessonContainers>
                <LessonTypography>From the example above, you can expect:</LessonTypography>
                <LessonTypography>Global variables can be accessed from anywhere in a JavaScript program.</LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Using let and const (ES6)</LessonTitle>

                <LessonTypography>Before 2015, using the <Strong>var</Strong> keyword was the only way to declare a JavaScript variable.</LessonTypography>

                <LessonTypography>
                    The 2015 version of JavaScript (ES6) allows the use of the <Strong>const</Strong> keyword to define a variable that cannot
                    be reassigned, and the <Strong>let</Strong> keyword to define a variable with restricted scope.
                </LessonTypography>

                <LessonTypography>
                    Because it is a little complicated to describe the difference between these keywords, and because they are not
                    supported in older browsers, the first part of this tutorial will most often use <Strong>var</Strong>.
                </LessonTypography>

                <LessonTypography>Safari 10 and Edge 14 were the first browsers to fully support ES6:</LessonTypography>

            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Much Like Algebra</LessonTitle>

                <LessonTypography>In this example, <Strong>price1,</Strong> <Strong>price2,</Strong> and <Strong>total</Strong>, are variables:</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {thirdLink}
                </SyntaxHighlighter>

                <LessonTypography>In programming, just like in algebra, we use variables (like price1) to hold values.</LessonTypography>

                <LessonTypography>In programming, just like in algebra, we use variables in expressions (total = price1 + price2).</LessonTypography>

                <LessonTypography>From the example above, you can calculate the total to be 11.</LessonTypography>

                <StepsChild />

                <Alert style={AlertStyleBG} severity="info"><AlertStyle>JavaScript variables are containers for storing data values.</AlertStyle> </Alert>
            </LessonContainers>
            <Introductions />
        </>
    );
}