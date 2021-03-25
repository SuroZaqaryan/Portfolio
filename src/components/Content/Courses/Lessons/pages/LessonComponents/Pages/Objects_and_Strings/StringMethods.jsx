import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    CustomBlockContainer, LessonContainers, Strong,
    LessonSideBarTitle,
    LessonTitle,
    LessonTypography, AlertStyle,
} from "../../style/LessonsStyledDesign";
import {RadioButtonsHoc} from "../../../../../../../Hocs/TasksHoc/TasksHoc";
import TaskWrapper from "../../TaskComponent/TaskBlock";
import {Alert} from "@material-ui/lab";
import StepContainer from "../../StepsLogic/StepsContainer";

const codeString = `var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;`;

const codeLink = `var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");`;

const secondLink = `var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);`;

const thirdLink = `var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");`;

function Questions() {
    const [QuestionTitle,] = useState('Find the position of the character h in the string txt.')
    const [taskCode,] = useState(`var txt = "abcdefghijklm"; \nvar pos = txt.***;`)

    const [task,] = useState([
        {value: 'correctly', question: 'indexOf("h")'},
        {value: 'option_1', question: 'split("r")'},
        {value: 'option_2', question: 'replace("h")'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} taskCode={taskCode} value={task.value}/>
}

const Introductions = RadioButtonsHoc(Questions);

function StepsChild() {
    const [stepInfo,] = useState([
        {
            description: "The search() method cannot take a second start position argument.",
        },
        {
            description: "The indexOf() method cannot take powerful search values (regular expressions).",
        },
    ])
    return <StepContainer stepInfo={stepInfo}/>
}

export default function StringMethods(props) {

    const {SideBarThemeValue, AlertStyleBG} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript String Methods <span className={"LessonEmoji"}>🏷️</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>String Methods and Properties</LessonTitle>

            <LessonContainers>
                <LessonTypography>
                    Primitive values, like "John Doe", cannot have properties
                    or methods (because they are not objects).
                </LessonTypography>

                <LessonTypography>
                    But with JavaScript, methods and properties are also available to
                    primitive values, because JavaScript treats primitive values
                    as objects when executing methods and properties.
                </LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>String Length</LessonTitle>

                <LessonTypography>
                    The <Strong>length</Strong> property returns the length of a string:
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

                <LessonTypography>Global variables can be accessed from anywhere in a JavaScript program.</LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Finding a String in a String</LessonTitle>

                <LessonTypography>
                    The <Strong>indexOf()</Strong> method returns the index of (the position of) the first occurrence of a specified text in a string:
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
            </LessonContainers>

            <LessonContainers>
                <Alert style={AlertStyleBG} severity="info"><AlertStyle>JavaScript counts positions from zero.
                    0 is the first position in a string, 1 is the second, 2 is the third ...</AlertStyle></Alert>
            </LessonContainers>

            <LessonContainers>
                <LessonTypography>The <Strong>lastIndexOf()</Strong> method returns the index of the last occurrence of a specified text in a string:</LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Example</LessonTitle>

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

                <LessonTypography>Both <Strong>lastIndexOf(),</Strong> and <Strong>lastIndexOf(),</Strong> return -1 if the text is not found.</LessonTypography>

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

                    <Alert style={AlertStyleBG} severity="info"><AlertStyle>
                        The <Strong>lastIndexOf()</Strong> methods searches backwards (from the end to the beginning),
                        meaning: if the second parameter is <Strong>15,</Strong> the search starts at position 15, and searches to the beginning of the string
                    </AlertStyle></Alert>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Did You Notice?</LessonTitle>
                <LessonTypography>The two methods,<Strong>lastIndexOf()</Strong> and <Strong>search(),</Strong> are <Strong>equal?</Strong></LessonTypography>

                <LessonTypography>The two methods are <Strong>NOT</Strong> equal. These are the differences:</LessonTypography>

                <StepsChild />

                <LessonTypography>You will learn more about regular expressions in a later chapter.</LessonTypography>

            </LessonContainers>

            <Introductions />
        </>
    );
}