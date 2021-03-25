import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Alert} from "@material-ui/lab";
import {
    AlertStyle, CustomBlockContainer, LessonContainers,
    LessonSideBarTitle,
    LessonTitle,
    LessonTypography,
    Strong
} from "../../style/LessonsStyledDesign";
import {RadioButtonsHoc} from "../../../../../../../Hocs/TasksHoc/TasksHoc";
import TaskWrapper from "../../TaskComponent/TaskBlock";

const codeString = `var length = 16;    // Number
var lastName = "Johnson";   // String
var x = {firstName:"John", lastName:"Doe"};   // Object`;

const codeLink = ` var x = 5;          // Declare x, give it the value of 5
 var y = x + 2;   // Declare y, give it the value of x + 2`;

function Questions(props) {
    const [QuestionTitle,] = useState('Which two values does the Boolean data type accept?')

    const [task,] = useState([
        {value: 'correctly', question: 'True'},
        {value: 'option_1', question: 'Wrong'},
        {value: 'option_2', question: 'Right'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value}/>
}   const Introductions = RadioButtonsHoc(Questions);

export default function DataTypes(props) {

    const {SideBarThemeValue, AlertStyleBG} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Data Types <span className={"LessonEmoji"}>🆒</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>JavaScript Data Types</LessonTitle>

            <LessonContainers>
                <LessonTypography>JavaScript variables can hold many data types: numbers, strings, objects and more:</LessonTypography>

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
                <LessonSideBarTitle>The Concept of Data Types</LessonSideBarTitle>

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

                <LessonTypography>
                    In programming, data types is an important concept.
                </LessonTypography>

                <LessonTypography>
                    To be able to operate on variables, it is important to know something about the type.
                </LessonTypography>

                <LessonTypography>
                    Without data types, a computer cannot safely solve this:
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
                    var x = 16 + "Volvo";
                </SyntaxHighlighter>

                <LessonTypography>
                    Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?
                </LessonTypography>

                <LessonTypography>
                    JavaScript will treat the example above as:
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
                    var x = "16" + "Volvo";
                </SyntaxHighlighter>

                <Alert style={AlertStyleBG} severity="info"><AlertStyle>
                When adding a number and a string, JavaScript will treat the number as a string.</AlertStyle></Alert>
            </LessonContainers>

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
                    var x = "Volvo" + 16;
            </SyntaxHighlighter>

            <LessonTypography>
                JavaScript evaluates expressions from left to right. Different sequences can produce different results:
            </LessonTypography>

            <LessonTitle>JavaScript</LessonTitle>

            <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    var x = 16 + 4 + "Volvo";
            </SyntaxHighlighter>

            <Introductions />

        </>
    );
}