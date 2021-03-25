import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Steps} from 'antd';
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

const {Step} = Steps;

const codeString = ` <!DOCTYPE html>
<html>
    <head>
    <script>
        function myFunction() {
          document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
    </script>
    </head>
    <body>
    
    <h1>A Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
    
    </body>
</html>`;

const codeLink = "<script src=\"https://www.w3schools.com/js/myScript1.js\"></script>";
const secondLink = "<script src=\"/js/myScript1.js\"></script>";

function Questions() {
    const [QuestionTitle,] = useState('What will the code below output to the console and why?')

    const [taskCode,] = useState(`<script src=\"https://www.w3schools.com/js/myScript1.js\"></script>`)

    const [task,] = useState([
        {value: 'correctly', question: 'isNan function returns true if the argument is not a number otherwise it is false.'},
        {value: 'option_1', question: 'function returns false if the argument is not a string otherwise it is NaN.'},
        {value: 'option_2', question: 'JavaScript is only for web apps'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value} taskCode={taskCode}/>
}   const Introductions = RadioButtonsHoc(Questions);

function StepsChild() {
    const [stepInfo,] = useState([
        {
            title: "How do I get JavaScript?",
            description: "You don't have to get or download JavaScript.",
        },
        {
            title: "Where can I download JavaScript?",
            description: "JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.",
        },
        {
            title: "JavaScript is free to use for everyone.",
            description: "Get certified by completing the JavaScript course",
        },
    ])
    return <StepContainer stepInfo={stepInfo}/>
}

export default function CreatingFirstJS(props) {

    const {SideBarThemeValue, AlertStyleBG} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>Creating Your First JavaScript <span className={"LessonEmoji"}>💡</span> </LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>Commonly Asked Questions</LessonTitle>

            <StepsChild />

            <Alert style={AlertStyleBG} severity="info"><AlertStyle>Whether it’s client-side or server-side,
                create the program of your dreams by unlocking the fundamentals of JavaScript.</AlertStyle></Alert>

            <LessonContainers>
                <LessonTitle>Ready. Set. JavaScript!</LessonTitle>

                <LessonTypography>
                    Let’s start with the basics and add some JavaScript to a webpage.
                </LessonTypography>

                <LessonTypography>
                    On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by
                    <Strong><ReactMarkdown source={` <script> and </script> `}/></Strong> here is a
                    simple example
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

                <Alert style={AlertStyleBG} severity="info"><AlertStyle>Heads up! You can put the script tag anywhere in the HTML
                    document.</AlertStyle></Alert>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>External References</LessonTitle>

                <LessonTypography>
                    External scripts can be referenced with a full URL or with a path relative to the current web page.
                    <br/>
                    This example uses a full URL to link to a script:
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
                    {codeLink}
                </SyntaxHighlighter>

                <LessonTitle>Second option</LessonTitle>

                <LessonTypography>
                    This example uses a script located in a specified folder on the current web site:
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
                    {secondLink}
                </SyntaxHighlighter>
            </LessonContainers>

            <Introductions />
        </>
    );
}